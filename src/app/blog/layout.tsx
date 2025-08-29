import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '블로그 | 김영수',
  description: '개발하면서 배우고 정리한 내용들을 공유합니다.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
