/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora erros de linting durante o build para evitar falhas por causa dos peer dependencies
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
