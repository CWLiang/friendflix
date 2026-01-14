'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] min-h-[400px] flex flex-col justify-center pt-[120px] pb-[60px] px-5 md:px-[60px]">
      {/* Banner 背景圖片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/avatars/2025雙十.jpg)' }}
      />
      
      {/* 背景漸層遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-netflix-black/50 via-transparent to-netflix-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        {/* 主標題 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-bebas text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] text-white leading-none tracking-wide drop-shadow-lg"
        >
          週六好友聚會
        </motion.h1>

        {/* 副標題 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-noto text-xl sm:text-2xl md:text-[1.75rem] text-text-secondary mt-2 md:mt-4 drop-shadow-md"
        >
          人物圖鑑 2026 Edition
        </motion.p>

        {/* 日期徽章 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mt-6 md:mt-8 px-4 md:px-5 py-2 md:py-2.5 bg-black/50 backdrop-blur-sm rounded-full text-sm md:text-base text-text-secondary border border-white/10"
        >
          <span>📅</span>
          <span>週六 · 在我家 · 不見不散</span>
        </motion.div>
      </div>
    </section>
  )
}
