# 🤖 給前端 AI Agent 的實作指令

> 複製以下內容，直接貼給你的前端 AI Agent

---

## Prompt 開始 ⬇️

```
請幫我實作一個 Netflix 風格的好友介紹網站「Friendflix」。

## 專案背景
這是一個給我女朋友看的網站，介紹週六來我家聚會的 17 位朋友。每位朋友都被包裝成一部「影集」，包含姓名、綽號、影集標題、匹配度、個性標籤、幽默介紹和推薦攻略。

## 設計規格文件位置
專案中已有完整的設計規格，請務必先閱讀：
1. `UI_UX_SPEC.md` - 完整 UI/UX 規格書（最重要）
2. `IMPLEMENTATION_GUIDE.md` - 快速實作指南
3. `VISUAL_REFERENCE.md` - 視覺參考圖
4. `src/data/friends.ts` - 朋友資料（已準備好）

## 技術棧要求
- 框架：Next.js 14+ (App Router) 或 React + Vite
- 樣式：Tailwind CSS
- 動畫：Framer Motion
- 字型：Google Fonts (Bebas Neue + Noto Sans TC)
- TypeScript

## 實作步驟

### Step 1: 專案初始化
1. 初始化 Next.js 專案（如果還沒有）
2. 安裝必要依賴：framer-motion
3. 設定 Tailwind CSS
4. 在 globals.css 加入 CSS 變數和 Google Fonts

### Step 2: 實作基礎元件
依照以下順序實作：
1. `Header.tsx` - 固定導覽列 + FRIENDFLIX Logo
2. `Hero.tsx` - 主視覺區塊 + 標題動畫
3. `Footer.tsx` - "Made with ♥ for 書華"

### Step 3: 實作核心元件
1. `Tag.tsx` - 個性標籤元件
2. `MatchBadge.tsx` - 匹配度徽章（>90% 要有金色發光）
3. `Avatar.tsx` - 大頭照/漸層背景 + 首字母
4. `FriendCard.tsx` - 好友卡片（含 Hover 效果）
5. `FriendModal.tsx` - 點擊展開的詳細資訊彈窗
6. `FriendRow.tsx` - 橫向滾動列 + 導航箭頭

### Step 4: 組裝頁面
1. 在 `page.tsx` 組裝所有元件
2. 使用 `src/data/friends.ts` 的資料
3. 將朋友分成 3 列：
   - "超級好友們" (匹配度 ≥ 85%)
   - "今日精選" (75% - 85%)
   - "驚喜來賓" (其他)

### Step 5: 加入動畫
1. 頁面載入：卡片 stagger 淡入效果
2. 卡片 Hover：scale(1.08) + translateY(-10px) + 紅色光暈
3. Modal：slideUp + fadeIn
4. 匹配度數字：從 0 跳動到目標值

### Step 6: 響應式調整
- 手機 (≤640px)：卡片 160px 寬
- 平板 (641-1024px)：卡片 220px 寬
- 桌面 (≥1025px)：卡片 280px 寬

## 視覺風格重點
- 背景色：#141414 (Netflix 深黑)
- 強調色：#E50914 (Netflix 紅)
- 卡片 Hover 要有明顯的「浮起來」效果
- 高匹配度 (≥90%) 徽章要是金色 + 脈動動畫
- 整體要有電影院/串流平台的沉浸感

## 驗收標準
- [ ] 頁面載入有流暢的動畫
- [ ] 卡片 Hover 有放大浮起效果
- [ ] 點擊卡片會彈出 Modal 顯示詳細資訊
- [ ] Modal 可以關閉（點遮罩或 X 按鈕）
- [ ] 橫向滾動列可以滑動
- [ ] 手機版顯示正常
- [ ] 17 位朋友資料都正確顯示

## 注意事項
- 資料已在 `src/data/friends.ts` 準備好，直接 import 使用
- 沒有大頭照，請用 `generateAvatarGradient()` 函數產生漸層背景
- 標籤用 # 開頭呈現
- "FF.FF%" 這種特殊匹配度要能正確顯示

請開始實作，有問題隨時問我！
```

---

## Prompt 結束 ⬆️

