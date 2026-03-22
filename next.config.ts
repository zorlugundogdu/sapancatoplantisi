import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd && repoName ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
