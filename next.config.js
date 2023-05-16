/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  compiler: {},
  output: "standalone",
  swcMinify: true,
  staticPageGenerationTimeout: 2000000,
};

module.exports = nextConfig;
