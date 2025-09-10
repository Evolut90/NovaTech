import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LAST_UPDATE: process.env.VERCEL_GIT_COMMIT_TIMESTAMP || "",
  },
};

export default nextConfig;
