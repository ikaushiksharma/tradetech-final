'use client'
import CTAButton from '@/components/hero/cta'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    ;(async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
    return () => {}
  }, [])
  return (
    <div className="h-screen relative mx-auto flex flex-col pt-40 items-center ">
      <div>
        <h1 className="text-7xl mx-auto max-w-2xl uppercase text-center">
          Meet your AI Sales Copilot
        </h1>
        <div className="flex mx-auto justify-center gap-6 py-6 items-center">
          <CTAButton dark>Try Demo</CTAButton>
          <CTAButton>Get Started</CTAButton>
        </div>
        <div className="w-4/5 flex items-center justify-center  absolute bottom-0 left-1/2 transform -translate-x-1/2 z-[-1]">
          <video className="w-full" muted loop playsInline autoPlay>
            <source src="hero-animation.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
