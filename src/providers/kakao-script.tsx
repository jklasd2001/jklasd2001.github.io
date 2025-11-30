'use client'

import Script from 'next/script'

import { env } from 'src/env'

const KakaoScript = () => {
  const handleKakaoInit = () => {
    window.Kakao.init(env.NEXT_PUBLIC_KAKAO_REST_API_KEY)
    console.log('Kakao initialized')
    console.log(window.Kakao.isInitialized())
    console.log(window.Kakao)
  }

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.9/kakao.min.js"
      integrity="sha384-JpLApTkB8lPskhVMhT+m5Ln8aHlnS0bsIexhaak0jOhAkMYedQoVghPfSpjNi9K1"
      crossOrigin="anonymous"
      onLoad={handleKakaoInit}
    />
  )
}

export default KakaoScript
