import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../globals.css'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/common/footer'

const myFont = localFont({ src: '../assets/VioletSans-Regular.woff2' })

export const metadata: Metadata = {
  title: 'TradeTech AI',
  description: 'Next.js Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} max-w-screen-2xl w-full min-h-screen mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
