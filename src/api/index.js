import axios from "axios";
import jwtDecode from "jwt-decode";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const { accessToken } = localStorage;
    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => Promise.resolve(response),
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (
        err.response.status === 401 &&
        err.config &&
        !err.config.__isRetryRequest
      ) {
        const decodedToken =
          localStorage.getItem("accessToken") &&
          jwtDecode(localStorage.getItem("accessToken"));
        if (!decodedToken) reject("no token provided");
        if (Date.now() > decodedToken.exp * 1000) {
          originalReq._retry = true;

          let res = fetch(
            `${process.env.REACT_APP_API_URL}/auth/refresh-token`,
            {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
                Device: "device",
              },
              redirect: "follow",
              referrer: "no-referrer",
              body: JSON.stringify({
                accessToken: localStorage.getItem("accessToken"),
                refreshToken: localStorage.getItem("refreshToken"),
              }),
            },
          )
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
              localStorage.setItem("accessToken", res.accessToken);
              localStorage.setItem("refreshToken", res.refreshToken);
              originalReq.headers.authorization = `Bearer ${res.accessToken}`;
              originalReq.headers["Device"] = "device";

              return axios(originalReq);
            });

          resolve(res);
        }
      }

      reject(err);
    });
  },
);

export default api;
