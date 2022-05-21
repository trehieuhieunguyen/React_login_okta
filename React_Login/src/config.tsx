export default {
  oidc: {
    issuer: "https://dev-99875031.okta.com/oauth2/aus4vwyxmdbl7ZvKa5d7",
    clientId: "0oa4z6mhdws5qAAdt5d7",
    scopes: ["openid", "profile", "email", "custom-scope"],
    redirectUri: `${window.location.origin}/login/callback`,
    pkce: true,
    disableHttpsCheck: true,
  },
  widget: {
    issuer: "https://dev-99875031.okta.com/oauth2/aus4vwyxmdbl7ZvKa5d7",
    clientId: "0oa4z6mhdws5qAAdt5d7",
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "profile", "email", "custom-scope"],
    pkce: true,
    disableHttpsCheck: true,
  },
};
