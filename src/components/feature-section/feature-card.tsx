import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {
  icon: any
  title: string
  subtitle: string
  hoveredIndex: number | null
  idx: number
  setHoveredIndex: (idx: number | null) => void
}

const FeatureCard = ({
  icon,
  title,
  subtitle,
  hoveredIndex,
  idx,
  setHoveredIndex,
}: Props) => {
  return (
    <div
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full block bg-[#7E30E1] rounded-3xl"
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

      <div className="col-span-1 p-6 overflow-hidden relative z-20 rounded-2xl border border-gray-300 bg-gradient-to-b from-zinc-200/60 to-white  aspect-square h-[36vh]">
        <div className="z-50 h-full flex items-start justify-between flex-col w-full relative">
          <div className="w-20 h-20">
            <Image src={icon} alt="sometext" />
          </div>
          <div>
            <h1 className="text-xl uppercase">{title}</h1>{' '}
            <p className="text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
