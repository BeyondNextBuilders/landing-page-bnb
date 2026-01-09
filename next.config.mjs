/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig