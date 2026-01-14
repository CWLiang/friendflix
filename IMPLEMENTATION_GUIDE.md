# Friendflix 實作指南

> 這是給前端 AI Agent 的快速實作指南，詳細規格請參考 `UI_UX_SPEC.md`

## 🚀 快速開始

### 技術棧
- **框架**: Next.js 14+ (App Router) 或 React 18+ with Vite
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **字型**: Google Fonts (Bebas Neue + Noto Sans TC)

### 初始化專案

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir
# 或
npm create vite@latest . -- --template react-ts && npm install tailwindcss
```

### 安裝額外依賴

```bash
npm install framer-motion
```

---

## 📁 檔案結構

```
/src
├── app/
│   ├── layout.tsx        # 根佈局 (字型載入)
│   ├── page.tsx          # 主頁面
│   └── globals.css       # 全域樣式 + CSS 變數
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── FriendRow.tsx
│   ├── FriendCard.tsx
│   ├── FriendModal.tsx
│   ├── Footer.tsx
│   ├── Tag.tsx
│   ├── MatchBadge.tsx
│   └── Avatar.tsx
├── data/
│   └── friends.ts        # ✅ 已提供
└── lib/
    └── utils.ts
```

---

## 🎨 CSS 變數 (加入 globals.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap');

:root {
  /* 背景 */
  --bg-primary: #141414;
  --bg-secondary: #1a1a1a;
  
  /* 強調色 */
  --accent-primary: #E50914;
  --accent-gold: #FFD700;
  --accent-pink: #FF6B9D;
  
  /* 文字 */
  --text-primary: #FFFFFF;
  --text-secondary: #B3B3B3;
  --text-muted: #6D6D6D;
  
  /* 標籤 */
  --tag-default: #46D369;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Noto Sans TC', sans-serif;
}
```

---

## 🧩 元件實作重點

### 1. Header
- 固定置頂 (`fixed top-0`)
- 滾動後增加背景模糊 (`backdrop-blur`)
- Logo: `FRIENDFLIX`，使用 Bebas Neue，紅色

### 2. Hero Section
- 高度 `50vh`，漸層背景
- 主標題: "週六好友聚會"
- 副標題: "人物圖鑑"
- 載入動畫: 由下往上淡入

### 3. FriendRow
- 橫向滾動 (`overflow-x-auto`)
- 隱藏滾動條
- 左右箭頭導航 (桌面版)
- 標題格式: `▶ 超級好友們`

### 4. FriendCard ⭐ 核心元件
```tsx
// 尺寸
width: 280px
height: 420px

// 結構
┌──────────────────┐
│                  │
│   Avatar 區域    │  60%
│   + 匹配度徽章   │
│                  │
├──────────────────┤
│  影集標題        │
│  姓名 aka 綽號   │  40%
│  #標籤 #標籤     │
└──────────────────┘

// Hover 效果
transform: scale(1.08) translateY(-10px)
box-shadow: 加上紅色光暈
```

### 5. FriendModal
- 點擊卡片開啟
- 背景遮罩 `rgba(0,0,0,0.85)`
- 內容: 大頭照 + 完整資訊 (標題、姓名、匹配度、標籤、介紹、攻略)
- 匹配度數字動畫: 從 0 跳到目標值
- 關閉: 點擊遮罩或 X 按鈕

### 6. Footer
- "Made with ♥ for 書華"
- 心跳動畫

---

## 🎬 動畫規格 (Framer Motion)

```tsx
// 頁面載入 - 卡片 stagger 效果
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

// 卡片 Hover
whileHover={{ scale: 1.08, y: -10 }}

// Modal 進入
initial={{ opacity: 0, scale: 0.95, y: 50 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
```

---

## 📱 響應式斷點

```css
/* 手機 */
@media (max-width: 640px) {
  /* 卡片: 160px × 280px */
  /* 標題字型縮小 */
  /* Modal 全螢幕 */
}

/* 平板 */
@media (min-width: 641px) and (max-width: 1024px) {
  /* 卡片: 220px × 360px */
}

/* 桌面 */
@media (min-width: 1025px) {
  /* 卡片: 280px × 420px */
}
```

---

## ✅ 實作檢查清單

1. [ ] 專案初始化 + 依賴安裝
2. [ ] CSS 變數 + 字型設定
3. [ ] Header 元件
4. [ ] Hero 元件
5. [ ] FriendCard 元件
6. [ ] FriendRow 元件 (橫向滾動)
7. [ ] FriendModal 元件
8. [ ] Footer 元件
9. [ ] 載入動畫
10. [ ] Hover 互動效果
11. [ ] 響應式調整
12. [ ] 測試所有功能

---

## 🎁 彩蛋 (選配)

- 右上角按鈕點擊 → 愛心煙火動畫
- Netflix "Ta-dum" 音效
- 搜尋/篩選功能

---

## 📦 資料來源

資料已準備在 `src/data/friends.ts`，可直接 import 使用：

```tsx
import { friends, groupFriendsByMatch, generateAvatarGradient } from '@/data/friends';

// 取得分組後的資料
const { superFriends, todaysPicks, surpriseGuests } = groupFriendsByMatch();
```

---

**開始實作吧！祝順利 🎉**
