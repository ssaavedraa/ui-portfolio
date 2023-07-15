/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.0.109:3001/:path*'
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/santiagosaavedra.com.co/**'
      }
    ],
    minimumCacheTTL: 60
  },
  env: {
    apiBaseUrl: process.env.BACKEND_URL,
    phoneNumber: process.env.PHONE_NUMBER
  }
}

module.exports = nextConfig
