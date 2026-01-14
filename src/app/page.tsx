'use client'

import { useState, useMemo } from 'react'
import { Friend, groupFriendsByMatch, friends } from '@/data/friends'
import { useNotes } from '@/hooks/useNotes'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SearchFilter from '@/components/SearchFilter'
import FriendRow from '@/components/FriendRow'
import FriendModal from '@/components/FriendModal'
import SurpriseModal from '@/components/SurpriseModal'
import Footer from '@/components/Footer'
import NetflixIntro from '@/components/NetflixIntro'
import MouseGlow from '@/components/MouseGlow'
import RandomButton from '@/components/RandomButton'

export default function Home() {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [filteredIds, setFilteredIds] = useState<string[] | null>(null)

  // 筆記功能
  const { getNote, saveNote } = useNotes()

  // 取得分組後的朋友資料
  const { superFriends, todaysPicks, surpriseGuests } = groupFriendsByMatch()

  // 根據篩選結果過濾朋友
  const filterFriends = (friendList: Friend[]) => {
    if (!filteredIds) return friendList
    return friendList.filter(f => filteredIds.includes(f.id))
  }

  const filteredSuperFriends = useMemo(() => filterFriends(superFriends), [superFriends, filteredIds])
  const filteredTodaysPicks = useMemo(() => filterFriends(todaysPicks), [todaysPicks, filteredIds])
  const filteredSurpriseGuests = useMemo(() => filterFriends(surpriseGuests), [surpriseGuests, filteredIds])

  const handleFriendClick = (friend: Friend) => {
    setSelectedFriend(friend)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedFriend(null), 300)
  }

  const handleRandomSelect = (friend: Friend) => {
    setSelectedFriend(friend)
    setIsModalOpen(true)
  }

  // 檢查是否有搜尋結果
  const hasResults = filteredSuperFriends.length > 0 || filteredTodaysPicks.length > 0 || filteredSurpriseGuests.length > 0
  const isFiltering = filteredIds !== null

  return (
    <>
      {/* Netflix 開場動畫 */}
      {showIntro && <NetflixIntro onComplete={() => setShowIntro(false)} />}

      {/* 滑鼠追蹤光暈 */}
      <MouseGlow />

      <main className="min-h-screen bg-netflix-black">
        {/* Header */}
        <Header onSurpriseClick={() => setIsSurpriseOpen(true)} />

        {/* Hero Section */}
        <Hero />

        {/* 搜尋/篩選 */}
        <SearchFilter onFilterChange={setFilteredIds} />

        {/* 好友列表 */}
        <div className="pb-10">
          {!hasResults && isFiltering ? (
            // 無搜尋結果
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🔍</p>
              <p className="text-text-secondary text-lg">找不到符合條件的朋友</p>
              <p className="text-text-muted text-sm mt-2">試試其他關鍵字或標籤</p>
            </div>
          ) : (
            <>
              {/* Row 1: 4466大順如意肥蜜莉 */}
              {filteredSuperFriends.length > 0 && (
                <FriendRow
                  title="4466大順如意肥蜜莉"
                  friends={filteredSuperFriends}
                  onFriendClick={handleFriendClick}
                />
              )}

              {/* Row 2: 可愛的學弟妹們 */}
              {filteredTodaysPicks.length > 0 && (
                <FriendRow
                  title="可愛的學弟妹們"
                  friends={filteredTodaysPicks}
                  onFriendClick={handleFriendClick}
                />
              )}

              {/* Row 3: 特別來賓 */}
              {filteredSurpriseGuests.length > 0 && (
                <FriendRow
                  title="特別來賓"
                  friends={filteredSurpriseGuests}
                  onFriendClick={handleFriendClick}
                />
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <Footer />

        {/* 隨機推薦按鈕 */}
        <RandomButton onRandomSelect={handleRandomSelect} />

        {/* Friend Modal */}
        <FriendModal
          friend={selectedFriend}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          note={selectedFriend ? getNote(selectedFriend.id) : ''}
          onSaveNote={saveNote}
        />

        {/* Surprise Modal */}
        <SurpriseModal
          isOpen={isSurpriseOpen}
          onClose={() => setIsSurpriseOpen(false)}
        />
      </main>
    </>
  )
}
