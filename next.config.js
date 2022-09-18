// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const path = require("path");

const getPath = (libaryName) => path.resolve(`./node_modules/${libaryName}`);
const isProd = process.env.NODE_ENV == "production";
const libData = {
  react: getPath("react"),
  next: getPath("next"),
  ReactDOM: getPath("react-dom"),
  "react-select": getPath("react-select"),
};

module.exports = {
  NODE_ENV: "dev",
  useFileSystemPublicRoutes: true,
  basePath: "/Screen",
  output: "standalone",
  //assetPrefix: isProd ? "/static" : "",
  assetPrefix: isProd ? "/static" : "",
  webpack: (config, { dev }) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...libData,
      },
    };

    return config;
  },
};
