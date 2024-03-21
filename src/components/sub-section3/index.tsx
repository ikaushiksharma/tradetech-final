'use client'
import React, { useLayoutEffect } from 'react'
import MiniHeading from '../common/mini-heading'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import Image from 'next/image'
import Card1 from '../../app/assets/card1.svg'
import Card2 from '../../app/assets/card2.svg'
import Card3 from '../../app/assets/card3.svg'
type Props = {}

const SubSection3 = (props: Props) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container3',
        start: 'top top',
        scrub: true,
        end: '300% bottom',
        // markers: true,
        pin: true,
      },
    })
    tl.add('st')
      .from('.image3', { opacity: 0 }, 'st')
      .from('.heading', { opacity: 1, scale: 1 }, 'st')
      .from('.image1', { x: '-200%' }, 'st')
      .from('.image2', { x: '200%' }, 'st')
      .add('end')
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
      .add('transit')
      .to('.image3', { opacity: 1 }, 'transit')
      .to('.image1', { display: 'none' }, 'transit')
      .to('.image2', { display: 'none' }, 'transit')
      .add('start2')
      .to('.image3', { y: '80%', x: '40%', scale: 0.8 }, 'start2')
      .add('end2')
      .to(
        '.image3',
        {
          filter:
            'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
        },
        'end2'
      )
    return () => {
      tl.kill()
    }
  }, [])
  return (
    <>
      <div className="w-full container3 relative px-16  flex items-center justify-center h-screen">
        <div className="heading">
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
        <Image
          src={Card3}
          alt="image3"
          className="absolute top-1/2 image3 -translate-y-1/2"
        />
      </div>
      <div className="h-[150vh]"></div>
      <div className="w-full max-w-7xl z-[-1] rounded-3xl mx-12 container4 relative mb-36  flex items-center justify-center h-[60vh] bg-purple-500"></div>
    </>
  )
}

export default SubSection3
