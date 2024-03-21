import React from 'react'

type Props = {
  text: React.ReactNode
}

const MiniHeading = ({ text }: Props) => {
  return (
    <div className="text-sm flex gap-1 my-4 items-center justify-center">
      <div className="rounded-full w-4 h-4 bg-green-300"></div>
      <h6>{text}</h6>
    </div>
  )
}

export default MiniHeading
