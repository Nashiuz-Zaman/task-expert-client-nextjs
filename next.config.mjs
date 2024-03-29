/** @type {import('next').NextConfig} */

const nextConfig = {
   env: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
         process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID:
         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
         process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
         process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      NEXT_PUBLIC_IMGBB_API_KEY: process.env.NEXT_PUBLIC_IMGBB_API_KEY,
      NEXT_PUBLIC_PROD_SERVER_URL: process.env.NEXT_PUBLIC_PROD_SERVER_URL,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/**',
         },
         {
            protocol: 'https',
            hostname: '"lh3.googleusercontent.com',
            port: '',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
