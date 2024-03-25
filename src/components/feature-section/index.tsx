'use client'
import React, { useState } from 'react'
import FeatureCard from './feature-card'
import cone from '../../app/assets/cone.svg'
import donut from '../../app/assets/donut.svg'
import rectangle from '../../app/assets/rectangle.svg'
import cube from '../../app/assets/cube.svg'
import MiniHeading from '../common/mini-heading'
import CTAButton from '../hero/cta'
import { AnimatePresence, motion } from 'framer-motion'
const FeaturesSection = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="max-w-screen-2xl mt-12 relative p-16 w-full flex items-center justify-center min-h-screen h-full">
      <div className="max-w-screen-xl grid grid-cols-3 gap-6 w-auto h-full">
        <FeatureCard
          hoveredIndex={hoveredIndex}
          idx={0}
          setHoveredIndex={setHoveredIndex}
          icon={cone}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
        <div
          className="aspect-square gap-2 px-8 py-16 flex flex-col justify-center h-[36vh]"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === 1 && (
              <motion.span
                className="absolute inset-0 h-full w-full block bg-[#7E30E1]/10 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="w-fit z-50">
            <MiniHeading text="Services"></MiniHeading>
          </div>
          <h1 className="text-3xl">Key Services</h1>
          <div className="w-fit mt-auto">
            <CTAButton dark>Explore More</CTAButton>
          </div>
        </div>
        <FeatureCard
          hoveredIndex={hoveredIndex}
          idx={2}
          setHoveredIndex={setHoveredIndex}
          icon={cube}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
        <FeatureCard
          hoveredIndex={hoveredIndex}
          idx={3}
          setHoveredIndex={setHoveredIndex}
          icon={donut}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
        <FeatureCard
          hoveredIndex={hoveredIndex}
          idx={4}
          setHoveredIndex={setHoveredIndex}
          icon={rectangle}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
        <FeatureCard
          hoveredIndex={hoveredIndex}
          idx={5}
          setHoveredIndex={setHoveredIndex}
          icon={cone}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
      </div>
    </div>
  )
}

export default FeaturesSection
