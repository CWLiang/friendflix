'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Friend, generateAvatarGradient, getInitial } from '@/data/friends'
import MatchBadge from './MatchBadge'
import Tag from './Tag'

interface FriendModalProps {
  friend: Friend | null
  isOpen: boolean
  onClose: () => void
  note?: string
  onSaveNote?: (friendId: string, note: string) => void
}

export default function FriendModal({ friend, isOpen, onClose, note = '', onSaveNote }: FriendModalProps) {
  const [displayPercentage, setDisplayPercentage] = useState('0%')
  const [localNote, setLocalNote] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (isOpen && friend) {
      // 匹配度數字動畫
      setDisplayPercentage('0%')
      const timer = setTimeout(() => {
        setDisplayPercentage(friend.matchPercentage)
      }, 300)
      // 載入筆記
      setLocalNote(note)
      setIsEditing(false)
      return () => clearTimeout(timer)
    }
  }, [isOpen, friend, note])

  // 處理 ESC 鍵關閉
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // 防止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSaveNote = () => {
    if (friend && onSaveNote) {
      onSaveNote(friend.id, localNote)
      setIsEditing(false)
    }
  }

  if (!friend) return null

  const gradient = generateAvatarGradient(friend.name)
  const initial = getInitial(friend.name)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal 內容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div 
              className="relative w-full max-w-[900px] max-h-[90vh] bg-netflix-dark rounded-2xl overflow-hidden pointer-events-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 關閉按鈕 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-netflix-red text-white text-xl transition-colors"
              >
                ×
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
                {/* 左側大頭照 */}
                <div 
                  className="w-full md:w-[40%] min-h-[250px] md:min-h-[500px] flex items-center justify-center relative"
                  style={{ background: friend.avatarUrl ? `url(${friend.avatarUrl}) center/cover` : gradient }}
                >
                  {!friend.avatarUrl && (
                    <span className="font-bebas text-8xl md:text-9xl text-white/90 drop-shadow-lg">
                      {initial}
                    </span>
                  )}
                  
                  {/* 匹配度徽章 (手機版) */}
                  <div className="absolute bottom-4 right-4 md:hidden">
                    <MatchBadge percentage={friend.matchPercentage} size="lg" />
                  </div>
                </div>

                {/* 右側資訊 */}
                <div className="w-full md:w-[60%] p-6 md:p-10">
                  {/* 影集標題 */}
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-bebas text-3xl md:text-5xl text-white leading-none"
                  >
                    🎬 {friend.showTitle}
                  </motion.h2>
                  
                  {/* 裝飾線 */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="h-[3px] bg-netflix-red mt-3"
                  />

                  {/* 姓名/綽號 */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-text-secondary mt-4"
                  >
                    {friend.name} aka {friend.nickname}
                  </motion.p>

                  {/* 匹配度 (桌面版) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="hidden md:flex items-center gap-2 mt-6"
                  >
                    <span className="text-xl text-netflix-gold">⭐ 匹配度：</span>
                    <span className="font-bebas text-3xl text-netflix-gold">{displayPercentage}</span>
                  </motion.div>

                  {/* 標籤 */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-2 mt-4 md:mt-6"
                  >
                    {friend.tags.map((tag, i) => (
                      <Tag key={i} text={tag} size="md" />
                    ))}
                  </motion.div>

                  {/* 幽默介紹 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="relative mt-6 md:mt-8 p-4 md:p-5 bg-white/5 rounded-lg"
                  >
                    <span className="absolute top-2 left-3 text-5xl text-white/10 font-serif leading-none">"</span>
                    <h4 className="text-sm text-text-secondary mb-2">📝 一兩句幽默介紹</h4>
                    <p className="text-base md:text-lg text-white pl-4">{friend.description}</p>
                  </motion.div>

                  {/* 推薦攻略 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-4 md:mt-6 p-4 md:p-5 bg-netflix-red/10 rounded-lg border border-netflix-red/20"
                  >
                    <h4 className="text-sm text-text-secondary mb-2">💡 推薦攻略</h4>
                    <p className="text-base md:text-lg text-white">{friend.tips}</p>
                  </motion.div>

                  {/* Mikhor 的筆記區 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-4 md:mt-6 p-4 md:p-5 bg-netflix-pink/10 rounded-lg border border-netflix-pink/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm text-text-secondary">💕 Mikhor 的筆記</h4>
                      {!isEditing && (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="text-xs text-netflix-pink hover:text-white transition-colors"
                        >
                          ✏️ 編輯
                        </button>
                      )}
                    </div>
                    
                    {isEditing ? (
                      <div className="space-y-3">
                        <textarea
                          value={localNote}
                          onChange={(e) => setLocalNote(e.target.value)}
                          placeholder="記錄你對這位朋友的第一印象..."
                          className="w-full h-24 px-3 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder-text-muted text-sm resize-none focus:outline-none focus:border-netflix-pink"
                        />
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => {
                              setLocalNote(note)
                              setIsEditing(false)
                            }}
                            className="px-3 py-1.5 text-sm text-text-secondary hover:text-white transition-colors"
                          >
                            取消
                          </button>
                          <button
                            onClick={handleSaveNote}
                            className="px-4 py-1.5 bg-netflix-pink text-white text-sm rounded-lg hover:bg-netflix-pink/80 transition-colors"
                          >
                            儲存 💾
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-base text-white/80 italic">
                        {localNote || '還沒有寫筆記，點擊編輯來記錄第一印象！'}
                      </p>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
