'use client'

import { motion } from 'framer-motion'
import { Friend } from '@/data/friends'
import Avatar from './Avatar'
import MatchBadge from './MatchBadge'
import Tag from './Tag'

interface FriendCardProps {
  friend: Friend
  onClick: () => void
  index?: number
}

export default function FriendCard({ friend, onClick, index = 0 }: FriendCardProps) {
  const displayTags = friend.tags.slice(0, 3)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.08, 
        y: -10,
        zIndex: 10,
      }}
      onClick={onClick}
      className="relative flex-shrink-0 w-[160px] sm:w-[220px] lg:w-[280px] h-[280px] sm:h-[360px] lg:h-[420px] bg-netflix-dark rounded-lg cursor-pointer card-glow overflow-hidden scroll-item"
    >
      {/* Avatar 區域 (60%) */}
      <div className="relative h-[60%]">
        <Avatar name={friend.name} avatarUrl={friend.avatarUrl} size="md" />
        
        {/* 匹配度徽章 */}
        <div className="absolute bottom-3 right-3">
          <MatchBadge percentage={friend.matchPercentage} size="sm" />
        </div>
      </div>

      {/* 資訊區域 (40%) */}
      <div className="h-[40%] p-3 sm:p-4 flex flex-col">
        {/* 影集標題 */}
        <h3 className="font-noto text-sm sm:text-base lg:text-lg font-bold text-white leading-tight truncate">
          🎬 {friend.showTitle}
        </h3>

        {/* 姓名/綽號 */}
        <p className="text-xs sm:text-sm text-text-secondary mt-1 truncate">
          {friend.name} aka {friend.nickname}
        </p>

        {/* 標籤 */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {displayTags.map((tag, i) => (
            <Tag key={i} text={tag} size="sm" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
