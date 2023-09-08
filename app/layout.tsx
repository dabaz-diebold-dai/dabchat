import '@dabaz/app/globals.css'
import type { Metadata } from 'next'
import { graphik, spline } from '@dabaz/app/fonts'
import { ClerkProvider } from '@clerk/nextjs'

import { ThemeProvider } from '@dabaz/components/providers/theme-provider'
import { ModalProvider } from '@dabaz/components/providers/modal-provider'

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'DabChat',
  keywords: ['Online Chat'],
  authors: [{ name: 'DabAZ', url: 'https://dabaz.me' }],
  creator: 'DabAZ',
  title: 'DabChat',
  description: 'A web app for chat inspired by Discord',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: '/icon.ico',
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/apple-touch-icon.png',
  },
  metadataBase: new URL('https://chat.dabaz.me'),
  openGraph: {
    title: 'DabChat',
    description: 'A web app for chat inspired by Discord',
    url: 'https://chat.dabaz.me',
    siteName: 'DabChat',
    images: [
      {
        url: 'https://chat.dabaz.me/opengraph-image.jpg',
        width: 1920,
        height: 1080,
        alt: 'DabChat'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DabChat',
    description: 'A web app for chat inspired by Discord',
    images: ['https://chat.dabaz.me/twitter-image.jpg'],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "standard",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${graphik.variable} ${spline.variable}`} suppressHydrationWarning>
        <body className="bg-white dark:bg-neutral-800">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            storageKey="dabtheme"
          >
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
