import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  swcMinify: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
