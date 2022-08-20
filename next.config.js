// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const path = require("path");

const getPath = (libaryName) => path.resolve(`./node_modules/${libaryName}`);

const libData = {
  react: getPath("react"),
  next: getPath("next"),
  ReactDOM: getPath("react-dom"),
  "react-select": getPath("react-select"),
};

module.exports = {
  NODE_ENV: "dev",
  basePath: "",
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
