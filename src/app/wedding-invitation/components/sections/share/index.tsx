'use client'

import { useIsMounted } from '@toss/react'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { env } from 'src/env'

const ShareSection = () => {
  const isMounted = useIsMounted()

  const handleKakaoShare = () => {
    if (!isMounted) {
      return
    }

    if (!window.Kakao) {
      return
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '영수♥현아 결혼식에 초대합니다',
        description:
          '2026년 3월 7일 토요일 오후 12시\n웨스틴조선호텔 서울 그랜드볼룸',
        imageUrl: 'https://hellomybrand.com/wed/images/sample/ending-3.jpg', // 실제 이미지 URL로 변경 필요
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    })
  }

  const handleCopyAddress = () => {
    const currentUrl = window.location.href
    navigator.clipboard.writeText(currentUrl)
    toast.info('청첩장 주소가 클립보드에 복사되었습니다.')
  }

  useEffect(() => {
    if (!isMounted) {
      return
    }

    const Kakao = window.Kakao

    if (Kakao && !Kakao.isInitialized()) {
      window.Kakao.cleanup()
      window.Kakao.init(env.NEXT_PUBLIC_KAKAO_REST_API_KEY)
    }
  }, [isMounted])

  return (
    <section className="px-6 py-8 bg-white">
      <div className="space-y-3">
        {/* 카카오톡 공유 버튼 */}
        <button
          type="button"
          onClick={handleKakaoShare}
          className="w-full bg-yellow-300 text-gray-800 py-4 px-6 rounded-lg flex items-center justify-between hover:bg-yellow-400 transition-colors"
        >
          <span className="font-medium">카카오톡으로 청첩장 전하기</span>
          <svg
            role="img"
            aria-label="Kakao share"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-800"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 주소 복사 버튼 */}
        <button
          type="button"
          className="w-full bg-green-400 text-white py-4 px-6 rounded-lg flex items-center justify-between hover:bg-green-500 transition-colors"
          onClick={handleCopyAddress}
        >
          <span className="font-medium">청첩장 주소 복사하기</span>
          <svg
            role="img"
            aria-label="Copy address"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <rect
              x="9"
              y="9"
              width="13"
              height="13"
              rx="2"
              ry="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default ShareSection
