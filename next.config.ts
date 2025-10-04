import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

const Critters = require("critters-webpack-plugin");

module.exports = {
  webpack: (config: { plugins: any[] }) => {
    config.plugins.push(
      new Critters({
        preload: "swap",
        compress: true,
      })
    );
    return config;
  },
};

export default nextConfig;
