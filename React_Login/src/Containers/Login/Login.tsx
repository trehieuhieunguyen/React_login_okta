import React from "react";
import { Navigate } from "react-router-dom";
import OktaSignInWidget from "../OktaSignInWidget/OktaSignInWidget";
import { useOktaAuth } from "@okta/okta-react";

const Login = (props: any) => {
  const { config } = props;
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens: any) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err: any) => {
    console.log("Sign in error:", err);
  };

  if (!authState) {
    return <div>Loading ... </div>;
  }

  return authState.isAuthenticated ? (
    <Navigate to={{ pathname: "/" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default Login;
