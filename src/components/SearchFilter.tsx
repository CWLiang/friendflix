'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { friends } from '@/data/friends'

interface SearchFilterProps {
  onFilterChange: (filteredIds: string[] | null) => void
}

export default function SearchFilter({ onFilterChange }: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // 取得所有不重複的標籤
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    friends.forEach(f => f.tags.forEach(t => tags.add(t)))
    return Array.from(tags).sort()
  }, [])

  // 篩選邏輯
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterFriends(term, selectedTag)
  }

  const handleTagClick = (tag: string) => {
    const newTag = selectedTag === tag ? null : tag
    setSelectedTag(newTag)
    filterFriends(searchTerm, newTag)
  }

  const filterFriends = (term: string, tag: string | null) => {
    if (!term && !tag) {
      onFilterChange(null) // 顯示全部
      return
    }

    const filtered = friends.filter(f => {
      const matchesSearch = !term || 
        f.name.includes(term) || 
        f.nickname.includes(term) ||
        f.showTitle.includes(term)
      const matchesTag = !tag || f.tags.includes(tag)
      return matchesSearch && matchesTag
    })

    onFilterChange(filtered.map(f => f.id))
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedTag(null)
    onFilterChange(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="px-5 md:px-[60px] py-6"
    >
      {/* 搜尋列 */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="🔍 搜尋朋友姓名、綽號..."
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-netflix-red transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => handleSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {(searchTerm || selectedTag) && (
          <button
            onClick={clearFilters}
            className="text-sm text-text-secondary hover:text-netflix-red transition-colors"
          >
            清除篩選
          </button>
        )}
      </div>

      {/* 標籤篩選 */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-text-muted text-sm mr-2">熱門標籤：</span>
        {allTags.slice(0, 12).map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              selectedTag === tag
                ? 'bg-netflix-red text-white'
                : 'bg-white/10 text-text-secondary hover:bg-white/20'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
