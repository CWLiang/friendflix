'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  onSurpriseClick?: () => void
}

export default function Header({ onSurpriseClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-5 md:px-[60px] transition-all duration-300 ${
        scrolled
          ? 'bg-netflix-black/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <motion.h1
        className="font-bebas text-[24px] md:text-[32px] text-netflix-red tracking-[0.1em] cursor-pointer logo-glow select-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        FRIENDFLIX
      </motion.h1>

      {/* 右側按鈕 */}
      <motion.button
        onClick={onSurpriseClick}
        className="hidden sm:flex items-center gap-2 bg-netflix-red hover:bg-netflix-red-dark text-white text-sm font-semibold px-4 md:px-6 py-2.5 rounded-full transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>給 Mikhor 的小驚喜</span>
        <motion.span
          className="text-netflix-pink"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ♥
        </motion.span>
      </motion.button>
    </motion.header>
  )
}
