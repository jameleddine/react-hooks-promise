import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { SignInPage, ForgotPasswordPage } from "screens/auth";

export default function UnauthenticatedApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="*">
          <Redirect to="/sign-in" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
