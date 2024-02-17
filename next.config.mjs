/** @type {import('next').NextConfig} */

const nextConfig = {
  productionBrowserSourceMaps: false,
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
