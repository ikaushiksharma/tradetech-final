import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { BackgroundBeams } from '../hero2/bg-beams'

const Footer1 = () => {
  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join Myriad
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Discover the power of seamless agency management with Myriad Agency
          CRM. Experience the difference today and revolutionize the way you
          manage your agency with Myriad.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/agency"
            className={cn(buttonVariants({ variant: 'secondary' }), 'w-20')}
          >
            Join
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default Footer1
