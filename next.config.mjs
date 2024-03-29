/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**.png',
        },
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**.jpg',
        },
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**.jpeg',
        },
      ],
    },};

export default nextConfig;
