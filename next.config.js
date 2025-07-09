/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/my-website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-website/" : "",
};

module.exports = nextConfig;
