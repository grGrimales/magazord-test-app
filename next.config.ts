import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GITHUB_TOKEN: 'process.env.NEXT_PUBLIC_GITHUB_TOKEN', // Asegura que la variable esté accesible
  }
};

export default nextConfig;
