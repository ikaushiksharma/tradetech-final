'use client'
import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
type Props = {}

const SubSection1 = (props: Props) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: '200% bottom',
        // markers: true,
        pin: true,
      },
    })
    tl.fromTo('.text1', { display: 'block' }, { display: 'none' })
    tl.fromTo('.text2', { display: 'none' }, { display: 'block' })
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="w-full relative px-16 container border-green-500 flex items-center justify-center h-screen">
      <div className="flex w-32 items-center justify-center  absolute bottom-1/2 -translate-y-[80%] left-1/2 transform -translate-x-1/2 z-[-1]">
        <video className="w-full" muted loop playsInline autoPlay>
          <source src="coin1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex w-32 items-center justify-center  absolute left-40 top-56 z-[-1]">
        <video className="w-full" muted loop playsInline autoPlay>
          <source src="coin2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex w-32 items-center justify-center  absolute right-40 bottom-56 z-[-1]">
        <video className="w-full" muted loop playsInline autoPlay>
          <source src="coin3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex w-32 items-center justify-center  absolute top-40 right-56 z-[-1]">
        <video className="w-full" muted loop playsInline autoPlay>
          <source src="coin4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex w-32 items-center justify-center  absolute bottom-40 left-56 z-[-1]">
        <video className="w-full" muted loop playsInline autoPlay>
          <source src="coin5.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="text-xl max-w-xl text-center text-gray-500 hidden text1">
        <div className="text-4xl text-black">
          Trained by the best in the business
        </div>
        Our AI has been trained by the best sales coaches in the world. Our
        sales coaches like Ted McGrath will take your material and train your AI
        to become the perfect addition to your team.
      </h1>
      <h1 className="text-xl max-w-xl text-center text-gray-500 hidden text2">
        <div className="text-4xl text-black">
          Seamlessly enhance your current sales strategy{' '}
        </div>
        Our AI acts as a member of your team following your sales strategy and
        using your business language to better communicate with your clients
      </h1>
    </div>
  )
}

export default SubSection1
