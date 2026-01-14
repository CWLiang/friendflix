'use client'

import { motion } from 'framer-motion'

interface MatchBadgeProps {
  percentage: string
  size?: 'sm' | 'lg'
  animate?: boolean
}

export default function MatchBadge({ percentage, size = 'sm', animate = false }: MatchBadgeProps) {
  // 解析百分比數值
  const numericValue = parseFloat(percentage.replace('%', '').replace('FF', '100'))
  const isHighMatch = numericValue >= 90 || percentage.includes('FF')
  const isSpecial = percentage.includes('FF')

  const sizeClasses = {
    sm: 'px-2.5 py-1.5',
    lg: 'px-4 py-2',
  }

  const textClasses = {
    sm: 'text-lg',
    lg: 'text-2xl',
  }

  const getBackgroundClass = () => {
    if (isSpecial) return 'rainbow-gradient'
    if (isHighMatch) return 'bg-netflix-gold gold-pulse'
    return 'bg-netflix-red'
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} rounded ${getBackgroundClass()} text-white font-bebas flex flex-col items-center leading-none`}
      initial={animate ? { scale: 0.8, opacity: 0 } : false}
      animate={animate ? { scale: 1, opacity: 1 } : false}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className={`${textClasses[size]} ${isHighMatch && !isSpecial ? 'text-netflix-black' : ''}`}>
        {percentage}
      </span>
      <span className={`text-[10px] uppercase tracking-wider ${isHighMatch && !isSpecial ? 'text-netflix-black/80' : 'text-white/80'}`}>
        Match
      </span>
    </motion.div>
  )
}
