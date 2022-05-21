import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const Protected = () => {
  <h3 id="protected">Protected</h3>;
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth
        .getUser()
        .then((info: any) => {
          setUserInfo(info);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  if (!userInfo) {
    return (
      <div>
        <p>Fetching user info ...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p id="welcome">Welcome, &nbsp;{userInfo.name}!</p>
        <p>
          You have successfully authenticated against your Okta org, and have
          been redirected back to this application.
        </p>
      </div>
    </div>
  );
};

export default Protected;
