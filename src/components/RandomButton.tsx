'use client'

import { motion } from 'framer-motion'
import { friends } from '@/data/friends'
import { Friend } from '@/data/friends'

interface RandomButtonProps {
  onRandomSelect: (friend: Friend) => void
}

export default function RandomButton({ onRandomSelect }: RandomButtonProps) {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * friends.length)
    onRandomSelect(friends[randomIndex])
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 px-5 py-3 bg-gradient-to-r from-netflix-red to-netflix-pink text-white font-semibold rounded-full shadow-lg flex items-center gap-2"
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(229, 9, 20, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <span className="text-xl">🎲</span>
      <span className="hidden sm:inline">今天該認識誰？</span>
    </motion.button>
  )
}
