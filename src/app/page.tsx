'use client'
import FeaturesSection from '@/components/feature-section'
import FeaturesSection2 from '@/components/feature-section2'
import HeroSection from '@/components/hero'
import CTAButton from '@/components/hero/cta'
import HeroSection2 from '@/components/hero2'
import StepSection from '@/components/steps-section'
import SubSection1 from '@/components/sub-section1'
import SubSection2 from '@/components/sub-section2'
import SubSection3 from '@/components/sub-section3'
import Image from 'next/image'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'

export default function Home() {
  // useEffect(() => {
  //   ;(async () => {
  //     // @ts-ignore
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default
  //     const locomotiveScroll = new LocomotiveScroll()
  //   })()
  //   return () => {}
  // }, [])
  useEffect(() => {
    const lenis = new Lenis()

    // @ts-ignore
    lenis.on('scroll', (e) => {
      console.log(e)
    })

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
      <SubSection2 />
      <SubSection3 />
      {/* <FeaturesSection /> */}
      <FeaturesSection2 />
      <StepSection />
    </>
  )
}
