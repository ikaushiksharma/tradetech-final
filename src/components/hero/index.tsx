import React from 'react'
import CTAButton from './cta'
import Robo2 from './robo-2'

const HeroSection = () => {
  return (
    <div className="min-h-screen h-screen mb-12 px-8 md:px-16 mx-auto flex flex-col">
      <div className="h-1/2 w-full">
        <h1 className="md:text-5xl text-3xl mx-auto max-w-2xl uppercase text-center">
          Meet your AI Sales Copilot
        </h1>
        <div className="flex mx-auto justify-center gap-6 pt-12 items-center">
          <CTAButton dark arrow>
            Try Demo
          </CTAButton>
          <CTAButton>Get Started</CTAButton>
        </div>
      </div>
      <div className="flex w-full h-2/3 relative items-center justify-center z-[-1]">
        {/* <video className="w-full" muted loop playsInline autoPlay>
            <source src="hero-animation.mp4" type="video/mp4" />
          </video> */}
        <div className="h-full w-full">
          <Robo2 />
        </div>

        {/* </div> */}
      </div>
    </div>
  )
}

export default HeroSection
