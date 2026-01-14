'use client'

import { useState } from 'react'
import { Friend, groupFriendsByMatch } from '@/data/friends'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FriendRow from '@/components/FriendRow'
import FriendModal from '@/components/FriendModal'
import SurpriseModal from '@/components/SurpriseModal'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false)

  // 取得分組後的朋友資料
  const { superFriends, todaysPicks, surpriseGuests } = groupFriendsByMatch()

  const handleFriendClick = (friend: Friend) => {
    setSelectedFriend(friend)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // 延遲清除 selectedFriend 以保持退出動畫
    setTimeout(() => setSelectedFriend(null), 300)
  }

  return (
    <main className="min-h-screen bg-netflix-black">
      {/* Header */}
      <Header onSurpriseClick={() => setIsSurpriseOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* 好友列表 */}
      <div className="pb-10">
        {/* Row 1: 4466大順如意肥蜜莉 */}
        <FriendRow
          title="4466大順如意肥蜜莉"
          friends={superFriends}
          onFriendClick={handleFriendClick}
        />

        {/* Row 2: 可愛的學弟妹們 */}
        <FriendRow
          title="可愛的學弟妹們"
          friends={todaysPicks}
          onFriendClick={handleFriendClick}
        />

        {/* Row 3: 特別來賓 */}
        <FriendRow
          title="特別來賓"
          friends={surpriseGuests}
          onFriendClick={handleFriendClick}
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Friend Modal */}
      <FriendModal
        friend={selectedFriend}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Surprise Modal */}
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </main>
  )
}
