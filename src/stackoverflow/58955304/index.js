const { OAuth2Client } = require("google-auth-library");
const keys = {
  installed: {
    client_id: "1",
    client_secret: "client_secret",
    redirect_uris: ["http://example.com/callback"]
  }
};

async function getRedirectUrl() {
  const oAuth2Client = new OAuth2Client(
    keys.installed.client_id,
    keys.installed.client_secret,
    keys.installed.redirect_uris[0]
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/auth/bigquery",
    prompt: "consent"
  });

  return authorizeUrl;
}

module.exports = { getRedirectUrl };
