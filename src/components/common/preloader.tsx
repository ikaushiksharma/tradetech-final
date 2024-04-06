'use client'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

export default function Preloader() {
  const el = useRef(null)
  const tl = useRef(gsap.timeline())

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from('#banner > p', {
          duration: 2,
          opacity: 0,
          yPercent: 100,
          stagger: 0.5,
          ease: 'power3.easeInOut',
        })
        .from(
          '#line',
          {
            scaleX: 0,
            duration: 3,
            transformOrigin: 'left',
            ease: 'power3.easeInOut',
          },
          '<'
        )
        .to('#preloader_top', {
          y: -1000,
          duration: 2,
          ease: 'power3.out',
        })
        .to(
          '#preloader_bottom',
          {
            y: 1000,
            duration: 2,
            ease: 'power3.out',
          },
          '-=2'
        )
        .to(
          '#line',
          {
            scaleX: 0,
            duration: 1,
            transformOrigin: 'left',
            ease: 'power3.out',
          },
          '<'
        )
        .to(
          '#banner > p',
          {
            duration: 1.5,
            opacity: 0,
            yPercent: 100,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '<'
        )
        .to('#banner', {
          y: -10000,
        })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={el} className={'fixed h-screen z-[999999]'}>
        <span
          id="preloader_top"
          className={'bg-black fixed h-[50vh] top-0 right-0 left-0'}
        ></span>
        <span
          id="preloader_bottom"
          className={'bg-black fixed h-[50vh] bottom-0 right-0 left-0'}
        ></span>
        <span
          id="line"
          className={
            'w-full h-[1.5px] mt-[50vh] -translate-y-1/2 fixed inline-block bg-white'
          }
        ></span>
        <div
          id="banner"
          className="fixed top-0 left-0 right-0 bottom-0 h-screen flex flex-col justify-end md:py-[4vh] md:px-[4vw] py-7 px-6"
        >
          <p className="text-white text-6xl tracking-wide md:pb-[1vh] max-md:text-5xl">
            Tradetech.
          </p>
          <p
            className={
              'text-gray-100 text-2xl md:text-4xl tracking-wide whitespace-pre-wrap'
            }
          >
            Your AI Sales Copilot
          </p>
        </div>
      </div>
    </>
  )
}
