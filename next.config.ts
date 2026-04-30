import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "annasair.vercel.app" }],
        destination: "https://www.annasair.com/:path*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
