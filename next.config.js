/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/santiagosaavedra.com.co/**'
      }
    ],
    minimumCacheTTL: 60
  }
}

module.exports = nextConfig
