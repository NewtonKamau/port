const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const prod = process.env.NODE_ENV === "production";

module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: "/portfollio/_next/static/images/",
    },
  ],
  {
    basePath: prod? "/portfollio":"/",
    assetPrefix:  "/portfollio/" ,
    env,
  },
]);
