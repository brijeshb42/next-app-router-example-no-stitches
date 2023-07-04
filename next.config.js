const withLinaria = require("next-with-linaria");

/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  linaria: {
    // displayName: true,
    preprocessor(selector, css) {
      console.log({ selector });
      // everything is already done. no pre-processing required.
      return css;
    },
    tagResolver(importPath, importName) {
      if (importPath.startsWith("no-stitches")) {
        return `no-stitches/${importName}`;
      }
    },
  },
};

module.exports = withLinaria(nextConfig);
