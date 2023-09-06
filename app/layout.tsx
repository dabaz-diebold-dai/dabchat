import './globals.css'
import type { Metadata } from 'next'
import { graphik, spline } from './fonts'

export const metadata: Metadata = {
  title: 'DabChat',
  description: 'A web app for chat inspired by Discord.',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${graphik.variable} ${spline.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
