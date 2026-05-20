import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages + OpenNext compatibility
  // Do NOT use output: 'export' or output: 'standalone'
  images: {
    // Allow Supabase storage images and external sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Use unoptimized for Cloudflare Pages (no image optimization server)
    unoptimized: true,
  },
  // Suppress hydration warnings from browser extensions
  reactStrictMode: true,
};

export default nextConfig;
