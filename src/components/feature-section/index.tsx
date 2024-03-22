import React from 'react'
import FeatureCard from './feature-card'
import cone from '../../app/assets/cone.svg'
import donut from '../../app/assets/donut.svg'
import rectangle from '../../app/assets/rectangle.svg'
import cube from '../../app/assets/cube.svg'
import MiniHeading from '../common/mini-heading'
import CTAButton from '../hero/cta'
const FeaturesSection = () => {
  return (
    <div className="max-w-screen-2xl mt-12 relative p-16 w-full flex items-center justify-center min-h-screen h-full">
      <div className="max-w-screen-xl grid grid-cols-3 gap-6 w-auto h-full">
        <FeatureCard
          icon={cone}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
        <div className="aspect-square gap-2 px-8 py-16 flex flex-col justify-center h-[36vh]">
          <div className="w-fit">
            <MiniHeading text="Services"></MiniHeading>
          </div>
          <h1 className="text-3xl">Key Services</h1>
          <div className="w-fit mt-auto">
            <CTAButton dark>Explore More</CTAButton>
          </div>
        </div>
        <FeatureCard
          icon={cube}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
        <FeatureCard
          icon={donut}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
        <FeatureCard
          icon={rectangle}
          title="heading of card"
          subtitle="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident?
"
        />
        <FeatureCard
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
