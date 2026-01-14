'use client'

import { useState } from 'react'
import { generateAvatarGradient, getInitial } from '@/data/friends'

interface AvatarProps {
  name: string
  avatarUrl?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Avatar({ name, avatarUrl, size = 'md' }: AvatarProps) {
  const [imageError, setImageError] = useState(false)
  const gradient = generateAvatarGradient(name)
  const initial = getInitial(name)

  const sizeClasses = {
    sm: 'h-40 text-5xl',
    md: 'h-[252px] text-7xl',
    lg: 'h-full min-h-[300px] text-8xl',
  }

  // 如果有圖片 URL 且圖片載入成功，顯示圖片
  if (avatarUrl && !imageError) {
    return (
      <div
        className={`w-full ${sizeClasses[size]} rounded-t-lg overflow-hidden relative`}
        style={{ background: gradient }}
      >
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  // 否則顯示漸層背景 + 首字母
  return (
    <div
      className={`w-full ${sizeClasses[size]} rounded-t-lg flex items-center justify-center`}
      style={{ background: gradient }}
    >
      <span className="font-bebas text-white/90 drop-shadow-lg select-none">
        {initial}
      </span>
    </div>
  )
}
