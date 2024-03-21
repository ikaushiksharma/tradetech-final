'use client'
import HeroSection from '@/components/hero'
import CTAButton from '@/components/hero/cta'
import SubSection1 from '@/components/sub-section1'
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
    <>
      <HeroSection />
      <SubSection1 />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  )
}
