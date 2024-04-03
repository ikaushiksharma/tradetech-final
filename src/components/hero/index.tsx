import React from 'react'
import CTAButton from './cta'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="md:h-screen max-md:pb-40 px-16 relative mx-auto flex flex-col pt-40 items-center ">
      <div>
        <h1 className="md:text-5xl text-3xl mx-auto max-w-2xl uppercase text-center">
          Meet your AI Sales Copilot
        </h1>
        <div className="flex  mx-auto justify-center gap-6 pt-12 items-center">
          <CTAButton dark arrow>
            Try Demo
          </CTAButton>
          <CTAButton>Get Started</CTAButton>
        </div>
        <div className="md:w-3/4 w-full  flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-[-1]">
          <video className="w-full" muted loop playsInline autoPlay>
            <source src="hero-animation.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
