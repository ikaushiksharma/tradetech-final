import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  text: React.ReactNode
  className?: React.ClassAttributes<HTMLDivElement> | string
}

const MiniHeading = ({ text, className }: Props) => {
  return (
    <div
      className={cn([
        'text-sm flex gap-1 my-4 w-full items-center justify-center',
        className,
      ])}
    >
      <div className="rounded-full w-4 h-4 bg-green-300"></div>
      <h6>{text}</h6>
    </div>
  )
}

export default MiniHeading
