/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: '**.appypay.co.ao',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-leaflet'],
  },
};

export default nextConfig;
