import React from 'react'
import { cn } from '@/lib/utils'
type Props = {
  children: React.ReactNode
  dark?: boolean
  arrow?: boolean
  purple?:boolean
}

const CTAButton = ({ children, dark = false, arrow = false }: Props) => {
  return (
    <button
      className={cn([
        'py-4 px-6 whitespace-nowrap text-xl  rounded-full',
        dark
          ? 'bg-[#220a33] text-white'
          : 'bg-white text-slate-800 border border-gray-500',
        arrow ? 'flex justify-between items-center py-3 gap-2 px-3 pl-6' : '',
      ])}
    >
      {children}
      {arrow && (
        <div className="bg-white flex justify-center items-center rounded-full ml-4 size-10">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            color="#000"
          >
            <path
              fillRule="evenodd"
              d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"
            ></path>
          </svg>
        </div>
      )}
    </button>
  )
}

export default CTAButton
