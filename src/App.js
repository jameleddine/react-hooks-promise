import React, { Suspense } from "react";
import { routes } from "./routes/authenticated-routes";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
// import { useUser } from "context/user";
import theme from "theme";
import "./App.css";

const UnauthenticatedApp = React.lazy(() =>
  import("routes/unauthenticated-routes")
);

function App() {
  // const { user } = useUser();

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading data...</div>}>
        {/* {!user ? ( */}
          {/* <UnauthenticatedApp /> */}
        {/* // ) : ( */}
          <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        {/* // )} */}
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
