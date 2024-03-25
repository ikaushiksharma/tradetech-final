'use client'
import FeaturesSection from '@/components/feature-section'
import HeroSection from '@/components/hero'
import CTAButton from '@/components/hero/cta'
import HeroSection2 from '@/components/hero2'
import StepSection from '@/components/steps-section'
import SubSection1 from '@/components/sub-section1'
import SubSection2 from '@/components/sub-section2'
import SubSection3 from '@/components/sub-section3'
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
      <HeroSection2 />
      <HeroSection />
      <SubSection1 />
      <SubSection2 />
      <SubSection3 />
      <FeaturesSection />
      <StepSection />
    </>
  )
}
