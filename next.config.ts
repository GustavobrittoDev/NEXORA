import type { NextConfig } from "next";
import {
  GLOBAL_SECURITY_HEADERS,
  PROJECT_PREVIEW_HEADERS,
} from "./lib/security-headers";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...GLOBAL_SECURITY_HEADERS],
      },
      {
        source: "/project-previews/:path*",
        headers: [...PROJECT_PREVIEW_HEADERS],
      },
    ];
  },
};

export default nextConfig;
