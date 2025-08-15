import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이력서 - 김영수',
  description: '프론트엔드 개발자 김영수입니다.',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
