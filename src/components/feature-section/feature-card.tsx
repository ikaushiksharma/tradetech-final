import Image from 'next/image'
import React from 'react'

type Props = {
  icon: any
  title: string
  subtitle: string
}

const FeatureCard = ({ icon, title, subtitle }: Props) => {
  return (
    <div className="col-span-1 p-6 rounded-2xl border border-gray-300 bg-gradient-to-b from-zinc-200/60 to-white flex items-start justify-between flex-col aspect-square h-[36vh]">
      <div className="w-20 h-20">
        <Image src={icon} alt="sometext" />
      </div>
      <div>
        <h1 className='text-xl uppercase'>{title}</h1> <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  )
}

export default FeatureCard
