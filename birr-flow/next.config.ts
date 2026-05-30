import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['better-auth', '@better-auth/kysely-adapter', 'kysely', '@prisma/client'],
};

export default nextConfig;
