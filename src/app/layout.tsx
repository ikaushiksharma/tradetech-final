import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/common/footer'
import Footer1 from '@/components/footer1'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import Footer2 from '@/components/common/footer2'

const myFont = localFont({ src: 'assets/VioletSans-Regular.woff2' })

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
        className={`${myFont.className} overflow-clip max-w-screen-2xl selection:text-white selection:bg-[#7E30E1] w-full mx-auto`}
      >
        <Navbar />
        {children}
        <Footer1 />
        {/*  */}

        <Footer2 />
        {/* <Footer /> */}
      </body>
    </html>
  )
}

{
  /* <div className="pt-12 px-10">
<div className="border-[0.2px]  border-black"></div>
<div className="flex mt-4 justify-between">
  <div className="text-5xl w-1/2">T.</div>
  <div className="flex justify-between w-1/2 capitalize text-gray-400 font-light text-sm">
    <div className="">BASED IN BRISTOL, UK WORKING WORLDWID</div>
    <div className="">ABOUT</div>
    <div className="">BLOG</div>
  </div>
</div>
<div className="flex justify-between mt-10">
  <div className="w-1/2 space-y-10">
    <div className="text-xl">What are you waiting for?</div>
    <div className="text-5xl w-3/4">
      Get a stunning website designed and online within the next 10
      days.
    </div>
  </div>
  <div className="w-1/2 flex justify-between">
    <div className="w-1/2"></div>
    <div className="text-gray-400 w-1/2">
      <div className="w-full">Newsletter</div>
      <div className="flex space-x-1 w-full font-thin">
        <input
          type="text"
          placeholder="hey@gmail.com"
          className="bg-[#f2f2f2] py-3 text-xs outline-none px-4 w-3/4"
        />
        <div className="bg-[#f2f2f2] py-3 px-4 w-1/4">Get</div>
      </div>
      <div className="flex text-xs pt-2">
        Join our newsletter to stay informed about new tips,
        tutorials, projects, products, investments, and more.
      </div>
    </div>
  </div>
</div>
<div className="flex justify-between mt-6">
  <div className="w-1/2 flex space-x-4">
    <div>WORK</div>
    <div>NEWS</div>
    <div>CONTACT</div>
  </div>
  <div className="flex justify-between">
    <div></div>
    <div className="flex space-x-4">
      <div>LINKEDIN</div>
      <div>TWITTER</div>
      <div>DRIBBLE</div>
    </div>
  </div>
</div>
<div className="w-full overflow-hidden h-[150px] leading-none pt-10 text-center ">
  <p className="-pb-10 text-[14rem] leading-tight">TRADETECH</p>
</div>
</div> */
}
