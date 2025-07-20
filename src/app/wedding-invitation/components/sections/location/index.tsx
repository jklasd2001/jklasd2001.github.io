'use client'

import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from 'react-kakao-maps-sdk'

import { env } from 'src/env'

import SectionTitle from '../../section-title'

const LocationSection = () => {
  const [loading, error] = useKakaoLoader({
    appkey: env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  })

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('서울 중구 소공로 106')
  }

  const handleOpenKakaoMap = () => {
    window.open(
      'https://map.kakao.com/link/map/웨스틴조선호텔,37.5647,126.9757',
      '_blank',
    )
  }

  if (loading) {
    return (
      <section className="px-6 py-20 bg-white">
        <div className="text-center">
          <div className="text-gray-600">지도를 불러오는 중...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="px-6 py-8 bg-white">
        <div className="text-center">
          <div className="text-gray-600">지도를 불러올 수 없습니다.</div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-20 bg-[#ebf1e0]">
      {/* 헤더 */}
      <div className="text-center mb-6">
        <SectionTitle title="LOCATION" />

        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-gray-800">웨스틴조선호텔 서울 그랜드볼룸</span>
          <svg
            role="img"
            aria-label="Arrow right"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-600"
          >
            <path
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-gray-600">서울 중구 소공로 106</span>
          <button
            type="button"
            onClick={handleCopyAddress}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              role="img"
              aria-label="Copy address"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
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
      </div>

      {/* 지도 */}
      <div className="relative mb-6">
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <KakaoMap
            center={{ lat: 37.5647, lng: 126.9757 }}
            style={{ width: '100%', height: '300px' }}
            level={3}
          >
            <MapMarker position={{ lat: 37.5647, lng: 126.9757 }}>
              <div className="text-center">
                <div className="text-sm font-medium">웨스틴조선호텔</div>
              </div>
            </MapMarker>
          </KakaoMap>
        </div>

        {/* 카카오맵 열기 버튼 */}
        <button
          type="button"
          onClick={handleOpenKakaoMap}
          className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-green-600 transition-colors"
        >
          <svg
            role="img"
            aria-label="Kakao map"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="text-yellow-300"
          >
            <path
              d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
          카카오맵 열기
        </button>
      </div>

      {/* 교통 정보 */}
      <div className="space-y-4">
        {/* 자차 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <svg
              role="img"
              aria-label="Car"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 12.4 1 13.1 1 13.9V16c0 .6.4 1 1 1h2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="7"
                cy="17"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="17"
                cy="17"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="font-medium text-gray-800">자차</span>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>내비게이션 : '서울 웨스틴조선호텔' 검색</p>
            <p>서울시 중구 소공로 106 서울 웨스틴조선호텔</p>
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-full h-px bg-gray-300" />

        {/* 버스 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <svg
              role="img"
              aria-label="Bus"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M8 6v2m8-2v2m-8 4h8m-8 4h8m-8 2h8M6 6h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-gray-800">버스</span>
          </div>
          <div className="text-sm text-gray-600 space-y-2">
            <div>
              <p className="font-medium">172(우리은행종로지점 방면)</p>
              <p>{'서울광장역 하차 > 데미타스커피 왼쪽 방면 > 도보 5분'}</p>
            </div>
            <div>
              <p className="font-medium">405(롯데백화점 방면)</p>
              <p>{'서울광장역 하차 > 데미타스커피 왼쪽 방면 > 도보 5분'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
