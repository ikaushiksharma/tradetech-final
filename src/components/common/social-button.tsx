import Link from 'next/link'
import React from 'react'

type Props = {
  href: string
  logo: React.ReactNode
}

const SocialButton = ({ href, logo }: Props) => {
  return (
    <Link
      href={href}
      className="h-10 flex items-center justify-center aspect-square rounded-full hover:bg-[#9849ff] scale-75 text-white cursor-pointer transition-all duration-200 bg-[#220a33]"
    >
      {logo}
    </Link>
  )
}

export default SocialButton
