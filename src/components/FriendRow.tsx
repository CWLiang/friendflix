'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Friend } from '@/data/friends'
import FriendCard from './FriendCard'

interface FriendRowProps {
  title: string
  friends: Friend[]
  onFriendClick: (friend: Friend) => void
}

export default function FriendRow({ title, friends, onFriendClick }: FriendRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative py-4 md:py-6">
      {/* 區塊標題 */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-noto text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold text-white px-5 md:px-[60px] mb-3 md:mb-4"
      >
        ▶ {title}
      </motion.h2>

      {/* 滑動容器 */}
      <div className="relative group">
        {/* 左箭頭 */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-black/70 hover:bg-white text-white hover:text-black opacity-0 group-hover:opacity-100 transition-all"
          aria-label="向左滑動"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 卡片列表 */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto hide-scrollbar scroll-container px-5 md:px-[60px] pb-4"
        >
          {friends.map((friend, index) => (
            <FriendCard
              key={friend.id}
              friend={friend}
              onClick={() => onFriendClick(friend)}
              index={index}
            />
          ))}
          
          {/* 右側留白 */}
          <div className="flex-shrink-0 w-5 md:w-[60px]" />
        </div>

        {/* 右箭頭 */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-black/70 hover:bg-white text-white hover:text-black opacity-0 group-hover:opacity-100 transition-all"
          aria-label="向右滑動"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
