import React from 'react'
import { Tilt } from '@jdion/tilt-react'
import mobile from '../../app/assets/mobile.svg'
import item1 from '../../app/assets/mobile-item-1.svg'
import item2 from '../../app/assets/mobile-item-2.svg'
import item3 from '../../app/assets/mobile-item-3.svg'
import item4 from '../../app/assets/mobile-item-4.svg'
import Image from 'next/image'
const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.910,.52,.99)', // Easing on enter/exit.
  maxGlare: 1, // From 0 - 1.
}

const TiltCard = () => {
  return (
    <Tilt
      options={defaultOptions}
      style={{ transformStyle: 'preserve-3d' }}
      className="relative h-4/5 w-4/5 transform bg-center bg-contain bg-no-repeat bg-[url('./assets/mobile.svg')]"
    >
      <Image
        src={item1}
        style={{ transform: 'translateZ(40px)' }}
        alt="full text"
        width={120}
        className="isolate shadow-lg absolute top-40 left-32"
      />
      <Image
        src={item2}
        style={{ transform: 'translateZ(40px)' }}
        alt="full text"
        width={120}
        className="isolate shadow-lg absolute top-60 translate-y-2 right-32"
      />
      <Image
        src={item3}
        style={{ transform: 'translateZ(40px)' }}
        alt="full text"
        width={120}
        className="isolate shadow-lg absolute bottom-36 left-32"
      />
      <Image
        src={item4}
        style={{ transform: 'translateZ(40px)' }}
        alt="full text"
        width={120}
        className="isolate shadow-lg absolute bottom-36 right-32"
      />
    </Tilt>
  )
}

export default TiltCard
