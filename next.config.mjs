/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable TypeScript type checking (show real errors)
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable Next.js Image Optimization for 40-60% size reduction
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for better performance
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    // Enable AVIF for modern browsers (30% smaller than WebP)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // SEO optimizations
  generateEtags: true,
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion'],
  },
}

export default nextConfig
