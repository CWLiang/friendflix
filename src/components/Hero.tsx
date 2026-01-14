'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] min-h-[400px] flex flex-col justify-center pt-[120px] pb-[60px] px-5 md:px-[60px]">
      {/* 背景漸層 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-netflix-black/50 to-netflix-black pointer-events-none" />
      
      {/* 裝飾背景效果 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-netflix-red/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-netflix-red/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* 主標題 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-bebas text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] text-white leading-none tracking-wide"
        >
          週六好友聚會
        </motion.h1>

        {/* 副標題 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-noto text-xl sm:text-2xl md:text-[1.75rem] text-text-secondary mt-2 md:mt-4"
        >
          人物圖鑑 2026 Edition
        </motion.p>

        {/* 日期徽章 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mt-6 md:mt-8 px-4 md:px-5 py-2 md:py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm md:text-base text-text-secondary"
        >
          <span>📅</span>
          <span>週六 · 在我家 · 不見不散</span>
        </motion.div>
      </div>
    </section>
  )
}
