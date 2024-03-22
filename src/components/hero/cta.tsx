import React from 'react'
import { cn } from '@/lib/utils'
type Props = {
  children: React.ReactNode
  dark?: boolean
}

const CTAButton = ({ children, dark = false }: Props) => {
  return (
    <button
      className={cn([
        'py-3 px-6 rounded-full',
        dark
          ? ' bg-purple-600 text-white'
          : 'bg-purple text-black border border-gray-500',
      ])}
    >
      {children}
    </button>
  )
}

export default CTAButton
