/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: "http://localhost:8080",
    GOOGLE_CLIENT_ID:
      "389748998229-fci9oodn4maq3d0rt8u2r9sfiogtp9dc.apps.googleusercontent.com",
    WEBSOCKET_BASE_URL: "ws://localhost:8080",
  },
};
