import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: '**.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'farm*.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'flickr.com',
      },
      {
        protocol: 'https',
        hostname: '**.flickr.com',
      },
    ],
  },
};

export default nextConfig;