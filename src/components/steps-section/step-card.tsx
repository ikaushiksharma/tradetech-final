'use client'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import step1 from '@/app/assets/step1.svg'
import step2 from '@/app/assets/step2.svg'
import step3 from '@/app/assets/step3.svg'

type Props = {
  i: number
  title: string
  description: string
  progress: any
  range: any
  targetScale: number
}

const StepCard = ({
  i,
  title,
  description,
  progress,
  range,
  targetScale,
}: Props) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })
  const getImage = () => {
    switch (i) {
      case 0:
        return step1
      case 1:
        return step2
      case 2:
        return step3
    }
  }

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col justify-between bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 to-gray-900 text-white relative -top-1/4 min-h-96 w-[40rem] rounded-3xl p-8 origin-top"
      >
        <div className="relative w-12 h-12">
          <Image src={getImage()} alt="" fill />
        </div>
        <div className="gap-6 flex flex-col">
          <h2 className="text-3xl">{title}</h2>
          <div className="w-full text-gray-300 relative top-[10%]">
            <p className="text-base first-letter:text-2xl">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default StepCard
