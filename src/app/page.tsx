'use client'
import FeaturesSection2 from '@/components/feature-section2'
import HeroSection from '@/components/hero'
import StepSection from '@/components/steps-section'
import SubSection1 from '@/components/sub-section1'
import SubSection2 from '@/components/sub-section2'
import SubSection3 from '@/components/sub-section3'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import TeamsSection from '@/components/teams-section'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    // @ts-ignore
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => {}
  }, [])
  return (
    <>
      <HeroSection />
      <SubSection1 />
      {/* <SubSection2 /> */}
      <SubSection3 />
      <FeaturesSection2 />
      <StepSection />
      <TeamsSection />
    </>
  )
}
