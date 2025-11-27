import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Basic optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'three', '@react-three/fiber', '@react-three/drei'],
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Compress responses
  compress: true,
};

export default nextConfig;
