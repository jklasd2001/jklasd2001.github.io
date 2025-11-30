'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

import { env } from 'src/env'

const ShareButtons = () => {
  const handleKakaoShare = () => {
    if (!window.Kakao) {
      toast.error('카카오톡 공유 기능을 불러오는 중입니다.')
      return
    }

    if (!window.Kakao.isInitialized()) {
      toast.error('카카오톡 초기화에 실패했습니다.')
      return
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '영수♥현아 결혼식에 초대합니다',
        description:
          '2026년 3월 7일 토요일 오후 1시 40분\n아시아드 시티 웨딩, 부산',
        imageUrl: 'https://zerowater.site/images/intro.webp',
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
    const initKakao = () => {
      if (!window.Kakao) {
        console.error('Kakao SDK not loaded')
        return
      }

      try {
        // cleanup if already initialized
        if (window.Kakao.isInitialized()) {
          console.log('Kakao already initialized')
          return
        }

        window.Kakao.init(env.NEXT_PUBLIC_KAKAO_REST_API_KEY)
        console.log('✅ Kakao initialized:', window.Kakao.isInitialized())
      } catch (error) {
        console.error('❌ Kakao init error:', error)
      }
    }

    initKakao()
  }, [])

  return (
    <div className="space-y-3">
      {/* 카카오톡 공유 버튼 */}
      <button
        type="button"
        onClick={handleKakaoShare}
        className="w-full bg-wedding-yellow py-4 px-6 rounded-lg flex items-center justify-between text-sm"
      >
        <span>카카오톡으로 청첩장 전하기</span>

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
        className="w-full bg-wedding-green text-white py-4 px-6 rounded-lg flex items-center justify-between text-sm"
        onClick={handleCopyAddress}
      >
        <span>청첩장 주소 복사하기</span>

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
  )
}

export default ShareButtons
