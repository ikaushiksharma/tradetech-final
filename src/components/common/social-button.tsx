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
      className="h-10 flex items-center justify-center aspect-square rounded-full hover:bg-purple-300 cursor-pointer transition-all duration-200 bg-purple-400"
    >
      {logo}
    </Link>
  )
}

export default SocialButton
