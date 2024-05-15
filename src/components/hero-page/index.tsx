import React from 'react'
import CTAButton from '../hero/cta'
import Marquees from './marquee'
import Robo2 from '../hero/robo-2'
import Robo1 from '../hero2/robo-1'

const HeroPage = () => {
  return (
    <section className="max-w-screen-2xl h-full flex flex-col items-center justify-center w-full mx-auto min-h-screen bg-white h max-md:px-4 relative">
      <div className="max-w-screen-xl flex-1 w-full mx-auto h flex items-center justify-center">
        <div className="space-y-6 flex-1">
          <h1 className="text-7xl">
            Your AI <br />
            Sales Copilot
          </h1>
          <p className="text-lg leading-tight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            doloribus quasi perspiciatis quidem accusantium quos sed
            reprehenderit aspernatur nemo nobis.
          </p>
          <CTAButton arrow dark>
            Get Started
          </CTAButton>
        </div>
        <div className="flex-1">
          <Robo2 />
        </div>
      </div>
      <Marquees />
    </section>
  )
}

export default HeroPage
