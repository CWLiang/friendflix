import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Friendflix | 週六好友聚會人物圖鑑',
  description: '週六好友聚會人物圖鑑 - 認識我們的朋友們',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
