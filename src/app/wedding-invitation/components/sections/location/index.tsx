'use client'

import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from 'react-kakao-maps-sdk'
import { toast } from 'sonner'

import { env } from 'src/env'

import SectionTitle from '../../section-title'

const LocationSection = () => {
  const [loading, error] = useKakaoLoader({
    appkey: env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  })

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('부산광역시 연제구 월드컵대로 344')
    toast.success('주소가 복사되었습니다.')
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
    <section className="py-20 bg-[#ebf1e0]">
      {/* 헤더 */}
      <div className="flex flex-col gap-10 mb-14">
        <SectionTitle title="LOCATION" />

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-800">아시아드시티 웨딩</span>

            <a href="tel:051-500-4500">
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
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-600">
              부산광역시 연제구 월드컵대로 344
            </span>

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
      </div>

      {/* 지도 */}
      <div className="relative mb-6">
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <KakaoMap
            center={{ lat: 35.189946, lng: 129.059668 }}
            style={{ width: '100%', height: '224px' }}
            level={3}
          >
            <MapMarker position={{ lat: 35.189946, lng: 129.059668 }} />
          </KakaoMap>
        </div>

        {/* 카카오맵 열기 버튼 */}
        <a
          href="https://place.map.kakao.com/14723705"
          target="_blank"
          rel="noopener"
          className="absolute top-3 left-3 bg-[#444] text-white px-2 py-1 rounded text-sm flex items-center gap-1 z-10"
        >
          <svg
            role="img"
            aria-label="Kakao map"
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00167 0.000464757C2.23702 -0.00180161 0.00342633 2.20791 7.56642e-06 4.94229C-0.00227161 6.18199 0.510544 7.24039 1.28205 8.14354C2.69058 9.79006 3.92247 11.5238 4.59483 13.6055C4.65523 13.7936 4.7464 14.0066 5.00622 13.9998C5.28884 13.993 5.36519 13.7539 5.43243 13.5511C6.06376 11.6473 7.11788 10.002 8.4512 8.50729C9.24322 7.61887 9.87911 6.59561 9.98509 5.39443C10.2449 2.46514 7.9156 -0.0391967 5.00167 0.000464757ZM6.70193 4.98875C6.6951 5.89303 5.89396 6.68399 4.99369 6.67606C4.08544 6.66813 3.29684 5.87377 3.30026 4.97175C3.30368 4.07087 4.10481 3.28104 5.01078 3.28444C5.91448 3.28897 6.70877 4.08787 6.70307 4.98761L6.70193 4.98875Z"
              fill="#FBE100"
            />
          </svg>
          카카오맵 열기
        </a>
      </div>

      {/* 교통 정보 */}
      <div className="space-y-4 px-6">
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
