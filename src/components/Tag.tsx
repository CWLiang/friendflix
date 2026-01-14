'use client'

import { motion } from 'framer-motion'

interface TagProps {
  text: string
  size?: 'sm' | 'md'
}

export default function Tag({ text, size = 'sm' }: TagProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
  }

  return (
    <motion.span
      className={`inline-block bg-netflix-green/20 text-netflix-green rounded ${sizeClasses[size]} font-medium transition-all cursor-default`}
      whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(70, 211, 105, 0.3)' }}
    >
      #{text}
    </motion.span>
  )
}
