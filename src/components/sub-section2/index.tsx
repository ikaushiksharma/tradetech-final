import React from 'react'
import TiltCard from './tilt-card'

const SubSection2 = () => {
  return (
    <div className="max-w-screen-2xl p-16 w-full bg-purple-500 flex items-center justify-center h-screen">
      <div className="h-full flex items-center rounded-3xl justify-center flex-1 border border-white/20">
        <TiltCard />
      </div>
      <div className="h-4/5 flex-1">
        <div></div>
      </div>
    </div>
  )
}

export default SubSection2
