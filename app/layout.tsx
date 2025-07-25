import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NerdPyramid Hub',
  description: 'Created by NerdPyramid Hub',
  generator: 'NerdPyramid Hub',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" 
      suppressHydrationWarning={true}
     data-qb-installed="true">
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  )
}
