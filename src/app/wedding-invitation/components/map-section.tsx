'use client'

import {
  Map as KakaoMap,
  MapMarker,
  useKakaoLoader,
} from 'react-kakao-maps-sdk'

import { env } from 'src/env'

const MapSection = () => {
  const [loading, error] = useKakaoLoader({
    appkey: env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <section>
      <KakaoMap
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '360px' }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          {/* <div style={{ color: '#000' }}>Hello World!</div> */}
        </MapMarker>
      </KakaoMap>
    </section>
  )
}

export default MapSection
