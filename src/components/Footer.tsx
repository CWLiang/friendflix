'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-10 md:py-[40px] px-5 md:px-[60px] text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-text-muted text-sm md:text-base"
      >
        Made with{' '}
        <motion.span
          className="inline-block text-netflix-pink"
          animate={{ scale: [1, 1.1, 1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ♥
        </motion.span>{' '}
        for Mikhor
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-text-muted/50 text-xs mt-3"
      >
        © 2026 Friendflix. 期待週六一起認識大家！
      </motion.p>
    </footer>
  )
}
