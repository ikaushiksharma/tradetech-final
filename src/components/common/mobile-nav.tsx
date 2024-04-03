'use client'
import React, { useEffect } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import logo from '@/assets/logo.svg'

import Image from 'next/image'

const links = [
  { name: 'Home', to: '#home', id: 1 },
  { name: 'About', to: '#about', id: 2 },
  { name: 'Blog', to: '#blog', id: 3 },
  { name: 'Contact', to: '#contact', id: 5 },
]

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

export default function MobileNav() {
  const [open, cycleOpen] = useCycle(false, true)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <nav className="flex fixed left-0 z-[1000] sm:hidden">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.5, duration: 0.3 },
            }}
            className="bg-black/50 backdrop-blur-md flex items-start justify-center h-screen w-[60vw]"
          >
            <motion.div
              className="my-36"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="relative w-full h-10 mb-20">
                <Image alt="logo" fill src={logo} className="object-contain" />
              </div>
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="text-3xl block font-semibold m-5 text-secondary"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="fixed cursor-pointer p-4">
        <NavButton onClick={cycleOpen}>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 invert"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </NavButton>
      </div>
    </nav>
  )
}

type NavButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

const NavButton = ({ onClick, children }: NavButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}
