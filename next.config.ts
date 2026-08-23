import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Turbopack doesn't infer the
  // parent WebstormProjects folder (which has a stray lockfile) as the root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
