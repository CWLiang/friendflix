'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'friendflix-notes'

interface Notes {
  [friendId: string]: string
}

export function useNotes() {
  const [notes, setNotes] = useState<Notes>({})
  const [isLoaded, setIsLoaded] = useState(false)

  // 從 localStorage 載入筆記
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setNotes(JSON.parse(saved))
      } catch {
        setNotes({})
      }
    }
    setIsLoaded(true)
  }, [])

  // 儲存筆記
  const saveNote = (friendId: string, note: string) => {
    const newNotes = { ...notes, [friendId]: note }
    setNotes(newNotes)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes))
  }

  // 取得特定朋友的筆記
  const getNote = (friendId: string): string => {
    return notes[friendId] || ''
  }

  // 刪除筆記
  const deleteNote = (friendId: string) => {
    const newNotes = { ...notes }
    delete newNotes[friendId]
    setNotes(newNotes)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes))
  }

  return { notes, saveNote, getNote, deleteNote, isLoaded }
}
