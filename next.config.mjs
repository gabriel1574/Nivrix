/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1536, 1920],
    imageSizes: [64, 128, 256, 384, 512],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
