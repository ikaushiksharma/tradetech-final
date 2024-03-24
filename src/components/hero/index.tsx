import React from 'react'
import CTAButton from './cta'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="h-screen px-16 relative mx-auto flex flex-col pt-40 items-center ">
      <div>
        <h1 className="text-7xl mx-auto max-w-2xl uppercase text-center">
          Meet your AI Sales Copilot
        </h1>
        <div className="flex mx-auto justify-center gap-6 py-6 items-center">
          <CTAButton dark>Try Demo</CTAButton>
          <CTAButton>Get Started</CTAButton>
        </div>
        <div className="w-3/4 flex items-center justify-center absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-[-1]">
          <video className="w-full" muted loop playsInline autoPlay>
            <source src="hero-animation.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
