/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pinterest.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
};



export default nextConfig;
