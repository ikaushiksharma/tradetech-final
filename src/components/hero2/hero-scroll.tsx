'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import { TypewriterEffect } from './typewritter-effect'

interface HeroContainerScrollProps {}

export const HeroContainerScroll: React.FC<HeroContainerScrollProps> = ({}) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  // const [isMobile, setIsMobile] = React.useState(false)

  // React.useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 768)
  //   }
  //   checkMobile()
  //   window.addEventListener('resize', checkMobile)
  //   return () => {
  //     window.removeEventListener('resize', checkMobile)
  //   }
  // }, [])

  const scaleDimensions = () => {
    // return isMobile ? [0.7, 0.9] : [1.05, 1]
    return [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])
  return (
    <div
      className="flex items-center z-50 justify-center relative pt-12"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <motion.div
          style={{
            translateY: translate,
          }}
          className="max-w-5xl relative mx-auto text-center"
        >
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
          <div className="text-center font-medium mt-4 z-[100]">
            <TypewriterEffect />
          </div>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="text-7xl whitespace-nowrap font-bold text-center md:text-9xl z-[100]">
              TradeTech
            </h1>
          </div>
        </motion.div>
        <Card rotate={rotate} scale={scale} />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t dark:from-background z-10"></div>
      </div>
    </div>
  )
}

interface CardProps {
  rotate: any
  scale: any
}

const Card: React.FC<CardProps> = ({ rotate, scale }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
      }}
      className="max-w-5xl -mt-16 mx-auto h-[15rem] sm:h-[25rem] md:h-[38rem] w-full border-2 border-[#6C6C6C] p-2 bg-background rounded-3xl shadow-2xl"
    >
      <Image
        src="/assets/preview.png"
        alt="Banner preview"
        width={1200}
        height={1200}
        className="rounded-2xl border-2 border-muted"
      />
    </motion.div>
  )
}
