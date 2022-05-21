import React, { useEffect, useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import config from "../../config";

const OktaSignInWidget = (props: any) => {
  const { onSuccess, onError } = props;
  const widgetRef = useRef(null);
  useEffect(() => {
    const widget = new OktaSignIn(config.widget);
    widget
      .showSignInToGetTokens({
        el: widgetRef.current as any,
      })
      .then(onSuccess)
      .catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return <div ref={widgetRef} />;
};

export default OktaSignInWidget;
