import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.css'

import { Header } from './ui/Header/Header'
import { URL } from 'url'
import Script from 'next/script'

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
        url: '/D04oghv.png',
        width: 800,
        height: 800
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://i.imgur.com')
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
      <Script async strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy='lazyOnload' id='google-analytics'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <body className='h-auto overflow-y-auto lg:overflow-y-hidden'>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
