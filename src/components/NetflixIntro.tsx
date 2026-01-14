'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NetflixIntroProps {
  onComplete: () => void
}

export default function NetflixIntro({ onComplete }: NetflixIntroProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // 檢查是否已經播放過
    const hasPlayed = sessionStorage.getItem('netflixIntroPlayed')
    if (hasPlayed) {
      setShow(false)
      onComplete()
      return
    }

    // 播放音效
    const audio = new Audio('/tadum.mp3')
    audio.volume = 0.5
    audio.play().catch(() => {
      // 如果自動播放被阻止，靜默處理
      console.log('Audio autoplay blocked')
    })

    // 3秒後結束動畫
    const timer = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('netflixIntroPlayed', 'true')
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          {/* FRIENDFLIX Logo 動畫 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.h1
              className="font-bebas text-5xl md:text-7xl lg:text-8xl text-netflix-red tracking-[0.15em]"
              animate={{
                textShadow: [
                  '0 0 20px rgba(229, 9, 20, 0.5)',
                  '0 0 60px rgba(229, 9, 20, 0.8)',
                  '0 0 20px rgba(229, 9, 20, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              FRIENDFLIX
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-text-secondary mt-4 text-lg"
            >
              為 Mikhor 特別製作 💕
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
