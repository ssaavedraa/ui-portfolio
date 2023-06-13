import { Metadata } from 'next'

import '../styles/globals.css'

import { Header } from './ui/Header/Header'

export const metadata: Metadata = {
  title: 'Santiago Saavedra A. | Fullstack Developer',
  description: 'Santiago Saavedra: Fullstack Engineer Portfolio - Explore innovative web apps and robust back-end systems. Discover expertise in front-end, back-end, and database management.',
  openGraph: {
    title: 'Santiago Saavedra A. | Fullstack Developer',
    description: 'Santiago Saavedra: Fullstack Engineer Portfolio - Explore innovative web apps and robust back-end systems. Discover expertise in front-end, back-end, and database management.',
    url: 'https://santiagosaavedra.com.co',
    siteName: 'Santiago Saavedra A.',
    images: [
      {
        url: 'https://i.imgur.com/D04oghv.png',
        width: 800,
        height: 800
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
