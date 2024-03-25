import React from 'react'
import TiltCard from './tilt-card'
import Tick from '../common/tick'
import CTAButton from '../hero/cta'

const SubSection2 = () => {
  return (
    <div className="max-w-screen-2xl relative text-white p-16 w-full bg-black flex items-center justify-center h-screen">
      <div className="h-full flex items-end rounded-3xl justify-center flex-1 border-white/20">
        <TiltCard />
      </div>
      <div className="h-full gap-6 flex flex-col justify-center p-16 flex-1">
        <div className="text-4xl">Our World Class Features</div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xl">
            <Tick />
            Always Available,{' '}
            <span className="font-semibold">Always Ready</span>
          </div>
          <div className="ml-6 text-sm">
            Our copilot will answer all your messages in real-time
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xl">
            <Tick />
            Engage with new leads{' '}
            <span className="font-semibold">within 5 mins.</span>
          </div>
          <div className="ml-6 text-sm">
            Our system will increase your connection by 100x
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl">
              <Tick />
              Control over your{' '}
              <span className="font-semibold">outreach message</span>
            </div>
            <div className="ml-6 text-sm">
              Train our IA based on your product and services
            </div>
          </div>
        </div>
        <div>
          {' '}
          <CTAButton>Get Started</CTAButton>
        </div>
      </div>
    </div>
  )
}

export default SubSection2
