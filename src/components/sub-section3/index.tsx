'use client'
import React, { useState } from 'react'
import MiniHeading from '../common/mini-heading'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import Card1 from '@/assets/card1.svg'
import Card2 from '@/assets/card2.svg'
import Card3 from '@/assets/card3.svg'
import Card4 from '@/assets/card4.svg'
import Tick from '../common/tick'
import { cn } from '@/lib/utils'
type Props = {}

const SubSection3 = (props: Props) => {
  const [mounted, setMounted] = useState(false)
  useGSAP(() => {
    setMounted(true)
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container3',
        start: 'top top',
        scrub: 0.5,
        end: '500% 200%',
        // markers: true,
        pin: true,
      },
    })

    tl.add('st')
      .from('.heading', { opacity: 1, scale: 1 }, 'st')
      .from('.image1', { x: '-200%' }, 'st')
      .from('.image2', { x: '200%' }, 'st')
      .add('end', '+=0.5')

      .to(
        '.heading',
        {
          opacity: 0,
          scale: 0,
        },
        'end'
      )
      .to(
        '.image1',
        {
          x: 0,
        },
        'end'
      )
      .to(
        '.image2',
        {
          x: 0,
        },
        'end'
      )
      // add a duration
      .add('transit', '-=0.5')
      .to('.image3', { display: 'block' }, 'transit')
      .to('.image1', { display: 'none' }, 'transit')
      .to('.image2', { display: 'none' }, 'transit')
      .add('start2')
      .from('.container4', { y: '100%' }, 'start2')
      .to('.image3', { y: '50%', x: '40%', scale: 0.8 }, 'start2')
      .to('.overImg1', { display: 'block' }, 'start2')
      .to('.overImg2', { display: 'block' }, 'start2')
      .add('end2')
      .to(
        '.image3',
        {
          filter:
            'drop-shadow(0 10px 8px rgb(0 0 0 / 0.5)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        },
        'end2'
      )
      .to('.overImg1', { rotate: 6, transformOrigin: 'bottom right' }, 'end2')
      .to('.overImg2', { rotate: 3, transformOrigin: 'bottom right' }, 'end2')
      .to('.card_text', { x: 0, opacity: 1 }, 'end2')

    return () => {
      tl.kill()
    }
  })
  return (
    <div className="w-full container3 relative px-16 flex items-center justify-center h-screen">
      <div className="heading opacity-0 scale-0">
        <MiniHeading text="Elevate" />
        <h1 className="text-7xl max-w-xl uppercase tracking-wider text-center">
          Let&apos;s elevate it further
        </h1>
      </div>

      <Image
        alt="img2"
        src={Card2}
        className="absolute top-1/2 image2 -translate-y-1/2"
      />
      <Image
        alt="img1"
        src={Card1}
        className="absolute top-1/2 image1 -translate-y-1/2"
      />
      <div className="image3 absolute top-1/2 hidden -translate-y-1/2">
        <Image
          src={Card2}
          alt="image3"
          className="absolute hidden z-[-2] rotate-0 overImg1"
        />
        <Image
          src={Card4}
          alt="image4"
          className="absolute hidden z-[-1] rotate-0 overImg2"
        />
        <Image src={Card3} alt="image3" className="z-[1]" />
      </div>
      <div
        className={cn([
          'w-full max-w-7xl -z-[1] fixed top-1/2 -translate-y-[25%] rounded-3xl mx-12 container4 mb-36 flex items-center text-white h-[70vh] bg-black',
          mounted ? 'opacity-100' : 'opacity-0',
        ])}
      >
        <div className="w-2/5 card_text opacity-0 h-full -translate-x-full flex gap-4 p-20 justify-center flex-col">
          <MiniHeading className={'w-fit'} text="Empowering You" />
          <div className="w-full gap-6 flex flex-col">
            <div className="flex gap-2 items-center text-3xl">
              <Tick />
              Change The Game
            </div>
            <div className="flex gap-2 items-center text-3xl">
              <Tick />
              Connect Faster
            </div>
            <div className="flex gap-2 items-center text-3xl">
              <Tick />
              Positive Interactions
            </div>
            <div className="flex gap-2 items-center text-3xl">
              <Tick />
              Extend Your Team
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubSection3
