import { useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import StepCard from './step-card'
import MiniHeading from '../common/mini-heading'
const projects = [
  {
    title: 'Provide all your data',
    description:
      'To get started, simply provide our copilot with all the essential information about your company or product. This will help us understand your needs and goals better, allowing us to provide tailored assistance. Share details such as your company background, mission, and any unique selling points that set you apart. ',
  },
  {
    title: 'Configure your campaign',
    description:
      'Next, easily configure the channels where our virtual assistant will connect. Whether its social media, email, or chatbots, our platform allows you to integrate and manage them seamlessly from a single interface. Choose the channels that are most relevant to your business and target audience, ensuring maximum engagement.',
  },
  {
    title: 'Let AI work its magic',
    description:
      'Sit back and let our artificial intelligence work its magic with your campaigns. Once youve provided the necessary information and configured the channels, our AI-powered copilot takes over. It analyzes data, generates insights, and provides data-driven recommendations to enhance your campaigns and improve customer engagement.',
  },
]
const StepSection = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  return (
    <main
      ref={container}
      className="max-w-screen-2xl relative p-8 md:p-16 min-h-screen h-full"
    >
      <div className="absolute inset-0 -z-10 h-full w-full items-center md:px-5 md:py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#7e30e1_100%)]"></div>
      <div className="sticky md:w-1/2 flex flex-col gap-6 justify-center  md:h-[60vh] md:top-36 text-white">
        <h1 className="text-4xl md:text-7xl max-w-md leading-[1.4] font-bold capitalize">
          <MiniHeading text="Workflow" className="text-left justify-start" />
          Get started today in 3 simple steps
        </h1>
        <p className="text-xl max-w-sm  text-gray-400">
          Effortlessly integrate our secure and reliable copilot for fast and
          efficient lead conversion.
        </p>
      </div>
      <div className="relative md:w-1/2 flex flex-col justify-center ml-auto">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return (
            <StepCard
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </main>
  )
}

export default StepSection
