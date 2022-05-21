import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

import Home from "../Home/Home";
import Protected from "../Protected/Protected";
import Login from "../Login/Login";
import config from "../../config";

import "./App.css";

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useNavigate();

  const customAuthHandler = () => {
    history("/login");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history(toRelativeUrl(originalUri || "", window.location.origin));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>My Okta-React app</p>
        <img className="App-logo" alt="logo" />
        <Security
          oktaAuth={oktaAuth}
          onAuthRequired={customAuthHandler}
          restoreOriginalUri={restoreOriginalUri}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/protected" element={<Protected />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/callback" element={<LoginCallback />} />
          </Routes>
        </Security>
      </header>
    </div>
  );
};

export default App;
