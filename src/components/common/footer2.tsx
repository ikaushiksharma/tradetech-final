import { cn } from '@/lib/utils'
import React from 'react'

const Footer2 = () => {
  return (
    <div className="min-h-screen h-fit relative bg-white w-full">
      <div className="absolute bg-black rounded-tr-3xl rounded-tl-3xl h-[120dvh] md:h-[90%] w-full  bottom-0">
        <div className="flex max-md:flex-col justify-between isolate gap-6 max-md:pt-12 px-8">
          <Card
            className="bg-red-300"
            subtitle="want to know more?"
            title="Learn How Can We Help"
          />
          <Card
            className="bg-blue-200"
            subtitle="Ready To Know How To Boost Sales?"
            title="Yes, Let's Chat"
          />
        </div>
        <div className="w-full max-md:py-12 md:h-[60vh] px-8 md:px-16 flex-1 md:text-xl">
          <div className="flex max-md:flex-col w-full max-md:gap-6 text-white justify-between">
            <div className="flex w-full md:w-1/2">
              <div className="flex-1 h-full">
                <ul className="gap-1 md:gap-4 flex flex-col">
                  <li>About</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="flex-1 h-full">
                <ul className="gap-1 md:gap-4 flex flex-col">
                  <li>Work</li>
                  <li>Work Gallery</li>
                  <li>Studio</li>
                  <li>Internships</li>
                </ul>
              </div>
            </div>
            <div className="flex w-full md:w-1/2">
              <div className="flex-1 h-full">
                <ul className="gap-1 md:gap-4 flex flex-col">
                  <li>Services</li>
                  <li>Brand</li>
                  <li>Content</li>
                  <li>Social Media</li>
                </ul>
              </div>
              <div className="flex-1 h-full">
                <ul className="gap-1 md:gap-4 flex flex-col">
                  <li>Full Address Lorem ipsum dolor sit,</li>
                  <li>+91 8888888888</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute overflow-clip flex-1 bottom-0 w-full h-1/3">
          <div className="text-white max-md:text-sm z-10 isolate relative top-1/2 px-8 md:px-16 md:flex justify-between">
            <div className="md:flex max-md:space-y-2 gap-8">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
            <div>&copy; 2024 TradeTech. All rights reserved</div>
          </div>
          <div className="text-9xl md:text-[18rem] overflow-clip absolute w-full translate-y-10 text-neutral-900 text-center">
            TradeTech
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer2

const Card = ({
  className,
  subtitle,
  title,
}: {
  className: React.HTMLAttributes<HTMLDivElement> | string
  subtitle: string
  title: string
}) => {
  return (
    <div
      className={cn([
        'h-52  rounded-3xl relative text-black px-4 md:px-12 py-6 md:-translate-y-1/2 md:w-1/2',
        className,
      ])}
    >
      <div className="flex flex-row items-center h-full justify-center w-full">
        <div className="flex-1 h-full flex flex-col justify-evenly">
          <div className="text-lg capitalize">{subtitle}</div>
          <div className="text-xl md:text-3xl">{title}</div>
        </div>
        <div className="h-3/4 aspect-square">
          <svg
            id="Group_4469"
            className="w-full h-full"
            data-name="Group 4469"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <circle
              id="Ellipse_18"
              data-name="Ellipse 18"
              cx="20"
              cy="20"
              r="20"
              fill="black"
            ></circle>
            <g
              id="Group_4466"
              data-name="Group 4466"
              transform="translate(12.472 12.177)"
            >
              <path
                id="Path_43"
                data-name="Path 43"
                d="M0,7.685S.939-.017,7.724,0"
                transform="translate(7.332 7.961)"
                fill="none"
                stroke="white"
                strokeMiterlimit="10"
                strokeWidth="1"
              ></path>
              <path
                id="Path_44"
                data-name="Path 44"
                d="M7.308,0c-.017,6.785,7.685,7.724,7.685,7.724L0,7.686"
                fill="none"
                stroke="white"
                strokeMiterlimit="10"
                strokeWidth="1"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
