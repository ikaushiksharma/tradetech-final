'use client'
import React from 'react'
import { BackgroundBeams } from './bg-beams'
import { HeroContainerScroll } from './hero-scroll'
import Robo1 from './robo-1'
import Tick from '../common/tick'
import CTAButton from '../hero/cta'

type Props = {}

const HeroSection2 = (props: Props) => {
  return (
    <section className="w-full min-h-screen bg-slate-100 max-md:px-4 pb-12 h-[120dvh] md:h-[calc(100vh-5rem)] relative">
      <div className="mx-auto relative w-full h-full max-w-screen-xl md:px-20">
        {/* <HeroContainerScroll /> */}
        <div className="flex max-md:flex-col max-md:space-y-12 items-center w-full h-full justify-between relative pt-12">
          <div className="h-2/5 max-md:w-full md:h-full w-1/2">
            {/* <Comp /> */}
            <h1 className="text-5xl md:text-8xl first-line:text-black text-left font-bold text-gray-400">
              Your AI Sales <span className="text-black">Copilot</span>
            </h1>
            <div className="flex-1  space-y-6 pt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl">
                  <Tick />
                  Always Available,{' '}
                  <span className="font-semibold">Always Ready</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl">
                  <Tick />
                  Engage with new leads{' '}
                  <span className="font-semibold">within 5 mins.</span>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xl">
                    <Tick />
                    Control over your
                    <span className="font-semibold">outreach message</span>
                  </div>
                </div>
              </div>
              <div>
                <CTAButton dark arrow>
                  Get Started
                </CTAButton>
              </div>
            </div>
          </div>
          <div className="h-3/5 md:h-full max-md:w-full flex-1">
            <Robo1 />
          </div>
        </div>
      </div>
      {/* <BackgroundBeams /> */}
    </section>
  )
}

export default HeroSection2

const Comp = () => {
  return (
    <div className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  inline-block">
      <span className="absolute inset-0 rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-background py-0.5 px-4 ring-1 ring-white/10 ">
        <span>Your AI Sales Copilot</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
          ></path>
        </svg>
      </div>
      {/* <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500 group-hover:opacity-40"></span> */}
    </div>
  )
}
