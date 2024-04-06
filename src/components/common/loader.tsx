'use client'
import React, { useEffect, useState } from 'react'
import Preloader from './preloader'
interface IProps {
  children: React.ReactNode
}
const Loader = ({ children }: IProps) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return loading ? <Preloader /> : { children }
}

export default Loader
