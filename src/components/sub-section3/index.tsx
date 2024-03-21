'use client'
import React, { useLayoutEffect } from 'react'
import MiniHeading from '../common/mini-heading'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import Image from 'next/image'
import Card1 from '../../app/assets/card1.svg'
import Card2 from '../../app/assets/card2.svg'
type Props = {}

const SubSection3 = (props: Props) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container3',
        start: 'top top',
        scrub: true,
        end: '200% bottom',
        markers: true,
        pin: true,
      },
    })
    tl.add('st')
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
    return () => {
      tl.kill()
    }
  }, [])
  return (
    <div className="w-full container3 relative px-16  flex items-center justify-center h-screen">
      <div className="heading">
        <MiniHeading text="Elevate" />
        <h1 className="text-7xl max-w-xl uppercase tracking-wider text-center">
          Let&apos;s elevate it further
        </h1>
      </div>
      <Image
        alt="img1"
        src={Card1}
        className="absolute top-1/2 image1 -translate-y-1/2"
      />
      <Image
        alt="img2"
        src={Card2}
        className="absolute top-1/2 image2 -translate-y-1/2"
      />
    </div>
  )
}

export default SubSection3
