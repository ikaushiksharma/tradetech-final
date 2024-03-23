'use client'
import React from 'react'
import { BackgroundBeams } from './bg-beams'
import { HeroContainerScroll } from './hero-scroll'

type Props = {}

const HeroSection2 = (props: Props) => {
  return (
    <section className="w-full h-full relative">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <HeroContainerScroll />
      </div>
      <BackgroundBeams />
    </section>
  )
}

export default HeroSection2