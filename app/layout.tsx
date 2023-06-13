import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.css'

import { Header } from './ui/Header/Header'

export const metadata: Metadata = {
  title: 'Santiago Saavedra A. | Fullstack Developer',
  description: 'Explore my captivating realm. Download my CV, connect with my networks, and navigate through a dynamic landing page.',
  openGraph: {
    title: 'Santiago Saavedra A. | Fullstack Developer',
    description: 'Explore my captivating realm. Download my CV, connect with my networks, and navigate through a dynamic landing page.',
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
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
