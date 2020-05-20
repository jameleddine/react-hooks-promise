import React from "react";
import api from "../api";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true, error: null };
    case "LOGIN_FAILURE":
      return { ...state, isAuthenticated: false, error: action.error };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false, error: null };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("accessToken"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// ###########################################################

function loginUser(dispatch, login, password, history, setIsLoading) {
  setIsLoading(true);
    dispatch({ type: "LOGIN_SUCCESS" });
        history.push("/app/dashboard");
        localStorage.setItem("accessToken", "true");
        localStorage.setItem("refreshToken", "true");
 /**  if (!!login && !!password) {
    api
      .post("/auth/signin", { email: login, password: btoa(password) })
      .then((r) => {
        localStorage.setItem("accessToken", r.data.accessToken);
        localStorage.setItem("refreshToken", r.data.refreshToken);
        dispatch({ type: "LOGIN_SUCCESS" });
        setIsLoading(false);
        history.push("/app/dashboard");
        return r;
      })
      .catch((e) => {
        console.error(e);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsLoading(false);
        dispatch({
          type: "LOGIN_FAILURE",
          error: e.response
            ? e.response.data.message
            : "Le nom d'utilisateur ou le mot de passe est incorrect! Veuillez réessayer.",
        });
        return e;
      });
  } else {
    dispatch({
      type: "LOGIN_FAILURE",
      error:
        "Le nom d'utilisateur ou le mot de passe est incorrect! Veuillez réessayer.",
    });
    setIsLoading(false);
  }*/
}

function signOut(dispatch, history) {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}
