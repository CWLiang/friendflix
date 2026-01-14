'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SurpriseModalProps {
  isOpen: boolean
  onClose: () => void
}

// 愛心粒子組件
function HeartParticle({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0,
        x: 0,
        y: 0,
      }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1.2, 0],
        x: x,
        y: y,
      }}
      transition={{ 
        duration: 2,
        delay: delay,
        ease: 'easeOut',
      }}
      className="absolute text-2xl md:text-4xl"
    >
      ❤️
    </motion.div>
  )
}

export default function SurpriseModal({ isOpen, onClose }: SurpriseModalProps) {
  // 處理 ESC 鍵關閉
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // 生成隨機愛心粒子
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.8,
    x: (Math.random() - 0.5) * 500,
    y: (Math.random() - 0.5) * 500 - 50,
  }))

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
          />

          {/* 內容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div 
              className="relative text-center pointer-events-auto p-6 md:p-10"
              onClick={onClose}
            >
              {/* 愛心煙火 */}
              <div className="absolute inset-0 flex items-center justify-center">
                {particles.map((p) => (
                  <HeartParticle key={p.id} delay={p.delay} x={p.x} y={p.y} />
                ))}
              </div>

              {/* Mikhor 的照片 */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.4 }}
                className="relative mx-auto mb-6 w-40 h-40 md:w-56 md:h-56"
              >
                {/* 愛心邊框裝飾 */}
                <div className="absolute -inset-3 bg-gradient-to-br from-netflix-pink via-netflix-red to-netflix-pink rounded-full opacity-60 blur-md animate-pulse" />
                
                {/* 照片 */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img
                    src="/avatars/Mikhor.JPG"
                    alt="Mikhor"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 愛心裝飾 */}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-2 -right-2 text-4xl md:text-5xl"
                >
                  💕
                </motion.span>
              </motion.div>

              {/* 訊息 */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-noto text-2xl md:text-4xl text-white font-semibold mb-4"
              >
                Mikhor ♥
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="font-noto text-base md:text-lg text-text-secondary max-w-lg mx-auto leading-relaxed"
              >
                寶貝不好意思，我一直都沒有好好介紹我的朋友們給你認識，
                <br className="hidden md:block" />
                所以我做了一個專門為你設計的網頁，
                <br className="hidden md:block" />
                未來我會把一個一個想要介紹給你認識的朋友放上來，
                <br className="hidden md:block" />
                讓你好好認識他們 ❤️
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-text-muted text-sm mt-8"
              >
                （點擊任意處關閉）
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
