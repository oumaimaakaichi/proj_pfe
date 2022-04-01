
module.exports = {
  reactStrictMode: true,
  plugins: [{ src: "~/plugins/lottie-player.js", mode: "client" }],
  env: {
    REACT_APP_STRAPI_API_URL: process.env.REACT_APP_STRAPI_API_URL
  }

};
