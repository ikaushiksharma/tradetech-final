import { Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/common/navbar'
import Footer1 from '@/components/footer1'
import Footer2 from '@/components/common/footer2'
import HeroSection2 from '@/components/hero2'
import Preloader from '@/components/common/preloader'
import Loader from '@/components/common/loader'

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
        className={`${myFont.className} select-none max-w-screen-2xl selection:text-white selection:bg-[#7E30E1] w-full mx-auto`}
      >
        <Preloader />
        <Navbar />
        <HeroSection2 />
        {children}
        <Footer1 />
        <Footer2 />
      </body>
    </html>
  )
}
