import React from 'react'
import MiniHeading from '../common/mini-heading'
import UserCard from './user-card'

const TeamsSection = () => {
  return (
    <div className="max-w-screen-2xl relative mt-12 p-16 w-full flex flex-col items-center min-h-screen h-full">
      <div className="w-full">
        <MiniHeading text="Our Leadership Team" className={'mr-auto w-fit'} />
      </div>
      <div className="w-full grid gap-2 grid-cols-6">
        <div className="col-span-6 px-4 flex items-center md:col-span-3 lg:col-span-2 aspect-[9/10]">
          <p className="w-3/4 text-2xl sm:text-3xl md:text-4xl">
            Meet our visionaries
          </p>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="col-span-6 md:col-span-3 lg:col-span-2 aspect-[9/10]"
          >
            <UserCard
              image="/assets/user.webp"
              name="Ritesh Kumar"
              desg="Web Developer"
              link="https://www.google.com"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamsSection
