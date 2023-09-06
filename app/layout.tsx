import './globals.css'
import type { Metadata } from 'next'
import { graphik, spline } from './fonts'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@dabaz/components/providers/theme-provider'

export const metadata: Metadata = {
  title: 'DabChat',
  description: 'A web app for chat inspired by Discord.',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: ['/icon.ico'],
    apple: ['/favicon/apple-touch-icon.png'],
    shortcut: ['/favicon/apple-touch-icon.png']
  },
  metadataBase: new URL('https://chat.dabaz.me')
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
            defaultTheme="dark"
            enableSystem={true}
            storageKey="dabtheme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
