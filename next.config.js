/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites () {
    return [
      {
        source: '/projects/weather',
        destination: 'https://weather.santiagosaavedra.com.co/'
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
