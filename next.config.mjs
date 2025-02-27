/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    outputFileTracingRoot: './',
  },
  // Deshabilitar la telemetría
  telemetry: false,
}

// loader: 'akamai',
// path: '',
// domains: ['res.cloudinary.com'],
// deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
// imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
// formats: ['image/avif', 'image/webp'],
// dangerouslyAllowSVG: true,
// contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
// minimumCacheTTL: 60,

// domains: ['res.cloudinary.com'],

export default nextConfig
