import React from 'react'
import CTAButton from '../hero/cta'
import Marquees from './marquee'
import Robo2 from '../hero/robo-2'
import Robo1 from '../hero2/robo-1'
import Model from './model'

const HeroPage = () => {
  return (
    <section className="max-w-screen-2xl h-full flex flex-col items-center justify-center w-full mx-auto min-h-screen bg-white max-md:px-4 relative">
      <div className="relative flex-1 w-full mx-auto flex items-center justify-center">
        <div className="space-y-6 top-0 left-1/2 -translate-x-1/2 justify-center h-3/4 flex max-w-screen-xl w-full flex-col absolute z-10">
          <h1 className="text-7xl">
            Your AI <br />
            Sales Copilot
          </h1>
          <p className="text-lg leading-tight max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            doloribus quasi perspiciatis quidem accusantium quos sed
            reprehenderit aspernatur nemo nobis.
          </p>
          <div>
            <CTAButton arrow dark>
              Get Started
            </CTAButton>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <Model />
        </div>
      </div>

      {/* <Marquees /> */}
    </section>
  )
}

export default HeroPage
