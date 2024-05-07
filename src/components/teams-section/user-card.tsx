import Image from 'next/image'
import React from 'react'
import Linkedin from '@/assets/linkedin.svg'
import Link from 'next/link'
interface ICardProps {
  image: string
  name: string
  desg: string
  link: string
}
const UserCard = ({ image, name, desg, link }: ICardProps) => {
  return (
    <div className="w-full relative h-full">
      <div className="h-4/5 relative">
        <Image src={image} objectFit="cover" fill alt={name} />
      </div>
      <div className="h-1/5 flex justify-center px-4 py-1 flex-col w-full bg-gray-200">
        <p className="text-black sm:text-lg md:text-2xl">{name}</p>
        <div className="flex items-center text-gray-700 justify-between">
          <p className="max-sm:text-xs">{desg}</p>
          <Link href={link} className="text-white">
            <Image
              className=""
              src={Linkedin}
              alt="linkedin"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserCard
