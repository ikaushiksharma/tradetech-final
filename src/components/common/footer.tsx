import React from 'react'
import MiniHeading from './mini-heading'
import CTAButton from '../hero/cta'
import Image from 'next/image'
import SocialButton from './social-button'

const Footer = () => {
  return (
    <div className="h-screen overflow-hidden bg-black text-white w-full">
      <div className="h-full mx-auto max-w-screen-xl">
        <div className="h-3/5 border-b flex flex-col gap-12 justify-center  border-gray-600">
          {/* <div className="text-7xl">
            <MiniHeading text="Ai Sales Copilot" />
            TradeTech<span className="text-gray-400">.ai</span>
          </div>
          <div className="mr-10  text-white w-fit">
            <CTAButton>Get Started Today</CTAButton>
          </div> */}
          <h1 className="text-7xl">Start building for free</h1>
          <div className="bg-black border flex gap-6 justify-between p-6 border-slate-400 w-full rounded-3xl">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your work email"
              className="flex-1 bg-black focus:outline-none text-2xl"
            />
            <button className="bg-purple-500 hover:bg-purple-600 transition-all font-medium p-6 py-5 text-xl capitalize rounded-xl">
              get started &rarr;
            </button>
          </div>
        </div>
        <div className="h-[30%] flex justify-between items-center">
          <div className="relative flex-[1] h-10">
            <Image
              className="object-left-top object-contain"
              alt="logo"
              fill
              src="/logo.webp"
            />
          </div>
          <div className="flex gap-12 w-1/2 h-full items-center justify-evenly">
            <div className="flex flex-col items-center justify-center">
              <MiniHeading text="Company" />
              <ul className="flex flex-col gap-2  text-gray-300">
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <MiniHeading text="Company" />
              <ul className="flex flex-col gap-2  text-gray-300">
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <MiniHeading text="Company" />
              <ul className="flex flex-col gap-2  text-gray-300">
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[10%] flex justify-between items-center">
          <div className="flex-1 px-4 flex uppercase text-sm items-center gap-10">
            <p className="text-gray-500 cursor-pointer hover:text-[#7E30E1] transition-all duration-700 before:absolute before:w-2 before:h-2 before:bg-[#7E30E1] before:rounded-full relative before:hidden before:hover:block before:-left-3 before:top-1/2 before:-translate-y-1/2">
              &copy; 2024 Tradetech pvt. ltd
            </p>
            <p className="text-gray-500 cursor-pointer hover:text-[#7E30E1] transition-all duration-700 before:absolute before:w-2 before:h-2 before:bg-[#7E30E1] before:rounded-full relative before:hidden before:hover:block before:-left-3 before:top-1/2 before:-translate-y-1/2">
              Privacy policy
            </p>
            <p className="text-gray-500 cursor-pointer hover:text-[#7E30E1] transition-all duration-700 before:absolute before:w-2 before:h-2 before:bg-[#7E30E1] before:rounded-full relative before:hidden before:hover:block before:-left-3 before:top-1/2 before:-translate-y-1/2">
              term of use
            </p>
          </div>
          <div className="flex-1 py-6 justify-end gap-4 items-center flex">
            <SocialButton
              logo={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_539_3519)">
                    <path
                      d="M17.9999 0H6.00015C2.70052 0 0.000293732 2.70023 0.000293732 5.99985V18.0001C0.000293732 21.2989 2.70052 24 6.00015 24H17.9999C21.2995 24 23.9997 21.2989 23.9997 18.0001V5.99985C23.9997 2.70023 21.2995 0 17.9999 0ZM21.9997 18.0001C21.9997 20.2051 20.206 22 17.9999 22H6.00015C3.79491 22 2.00034 20.2051 2.00034 18.0001V5.99985C2.00034 3.79432 3.79491 2.00005 6.00015 2.00005H17.9999C20.206 2.00005 21.9997 3.79432 21.9997 5.99985V18.0001Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.5008 6.99993C19.3292 6.99993 20.0008 6.32837 20.0008 5.49996C20.0008 4.67156 19.3292 4 18.5008 4C17.6724 4 17.0009 4.67156 17.0009 5.49996C17.0009 6.32837 17.6724 6.99993 18.5008 6.99993Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 6C8.68567 6 6.00015 8.68581 6.00015 11.9999C6.00015 15.3127 8.68567 18.0003 12 18.0003C15.3134 18.0003 17.9999 15.3127 17.9999 11.9999C17.9999 8.68581 15.3134 6 12 6ZM12 16.0002C9.79113 16.0002 8.0002 14.2093 8.0002 11.9999C8.0002 9.7904 9.79113 8.00005 12 8.00005C14.2089 8.00005 15.9998 9.7904 15.9998 11.9999C15.9998 14.2093 14.2089 16.0002 12 16.0002Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_539_3519">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              href="https://instagram.com"
            />
            <SocialButton
              logo={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z"
                    fill="currentColor"
                  />
                </svg>
              }
              href="https://twitter.com"
            />
            <SocialButton
              logo={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.1855 24V13.2H17.4644L18 8.4H14.1855V6.06211C14.1855 4.82611 14.2171 3.6 15.9443 3.6H17.6936V0.168164C17.6936 0.116564 16.191 0 14.6708 0C11.496 0 9.50808 1.98863 9.50808 5.64023V8.4H6V13.2H9.50808V24H14.1855Z"
                    fill="currentColor"
                  />
                </svg>
              }
              href="https://facebook.com"
            />
            <SocialButton
              logo={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 21.6004V14.5684C21.6 11.1124 20.856 8.47239 16.824 8.47239C14.88 8.47239 13.584 9.52839 13.056 10.5364H13.008V8.78439H9.19199V21.6004H13.176V15.2404C13.176 13.5604 13.488 11.9524 15.552 11.9524C17.592 11.9524 17.616 13.8484 17.616 15.3364V21.5764H21.6V21.6004ZM2.71199 8.78439H6.69599V21.6004H2.71199V8.78439ZM4.70399 2.40039C3.43199 2.40039 2.39999 3.43239 2.39999 4.70439C2.39999 5.97639 3.43199 7.03239 4.70399 7.03239C5.97599 7.03239 7.00799 5.97639 7.00799 4.70439C7.00799 3.43239 5.97599 2.40039 4.70399 2.40039Z"
                    fill="currentColor"
                  />
                </svg>
              }
              href="https://linkedin.com"
            />
            <SocialButton
              logo={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_539_3527)">
                    <path
                      d="M20.317 4.368C18.761 3.65379 17.119 3.14447 15.4319 2.85281C15.4166 2.84996 15.4007 2.85201 15.3866 2.85868C15.3725 2.86534 15.3609 2.87628 15.3534 2.88994C15.1424 3.26517 14.9087 3.75464 14.7451 4.13939C12.9004 3.8632 11.0652 3.8632 9.25833 4.13939C9.09464 3.74611 8.85248 3.26517 8.64056 2.88994C8.63273 2.87657 8.62104 2.86588 8.60703 2.85925C8.59303 2.85263 8.57735 2.85039 8.56204 2.85281C6.84792 3.14803 5.20758 3.66516 3.67692 4.368C3.6636 4.37365 3.65236 4.3833 3.64476 4.39561C0.533388 9.04397 -0.318987 13.5781 0.0991378 18.056C0.101013 18.0779 0.113341 18.0988 0.130357 18.1121C2.18315 19.6197 4.17168 20.5349 6.12323 21.1415C6.1384 21.1461 6.1546 21.1458 6.16965 21.1409C6.1847 21.136 6.19788 21.1265 6.20742 21.1139C6.66904 20.4835 7.08056 19.8188 7.43339 19.1197C7.4542 19.0788 7.43432 19.0302 7.39176 19.014C6.73903 18.7664 6.11751 18.4645 5.51962 18.1217C5.47233 18.0941 5.46853 18.0264 5.51208 17.994C5.63824 17.8998 5.76221 17.8026 5.88389 17.7026C5.89456 17.6938 5.90748 17.6882 5.92118 17.6863C5.93489 17.6845 5.94884 17.6865 5.96147 17.6921C9.88922 19.4854 14.1415 19.4854 18.0229 17.6921C18.0355 17.6861 18.0496 17.6838 18.0635 17.6855C18.0774 17.6872 18.0905 17.6928 18.1014 17.7016C18.2232 17.8022 18.3475 17.8996 18.4741 17.994C18.5176 18.0264 18.5148 18.094 18.4675 18.1216C17.8696 18.4711 17.2481 18.7664 16.5945 19.013C16.5844 19.0169 16.5753 19.0228 16.5676 19.0304C16.56 19.038 16.5541 19.0472 16.5503 19.0572C16.5464 19.0673 16.5448 19.0781 16.5454 19.0888C16.546 19.0996 16.5489 19.1101 16.5538 19.1197C16.9142 19.8177 17.3257 20.4825 17.7788 21.1129C17.7978 21.1396 17.8318 21.151 17.863 21.1415C19.824 20.5349 21.8126 19.6196 23.8654 18.1121C23.8742 18.1056 23.8816 18.0974 23.8869 18.0878C23.8923 18.0783 23.8956 18.0678 23.8966 18.0569C24.397 12.8799 23.0584 8.38299 20.3482 4.3965C20.3415 4.38359 20.3305 4.37349 20.317 4.368ZM8.02003 15.3294C6.83751 15.3294 5.86312 14.2438 5.86312 12.9105C5.86312 11.5771 6.81857 10.4915 8.02003 10.4915C9.23086 10.4915 10.1958 11.5867 10.1769 12.9105C10.1769 14.2438 9.22139 15.3294 8.02003 15.3294ZM15.9947 15.3294C14.8123 15.3294 13.8379 14.2438 13.8379 12.9105C13.8379 11.5771 14.7933 10.4915 15.9947 10.4915C17.2056 10.4915 18.1705 11.5867 18.1516 12.9105C18.1516 14.2438 17.2057 15.3294 15.9947 15.3294Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_539_3527">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              href="https://discord.com"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
