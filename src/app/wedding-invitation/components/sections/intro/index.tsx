'use client'

import { useInView } from '@react-spring/web'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Trail from 'src/components/trail'

const IntroSection = () => {
  const [ref, isInView] = useInView({
    amount: 0.5,
    once: true,
  })

  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    // 초기 뷰포트 높이를 고정
    const initialHeight = window.innerHeight
    setHeight(initialHeight)
  }, [])

  return (
    <section
      ref={ref}
      className="flex flex-col relative"
      style={{ height: height || '100vh' }}
    >
      <Image
        src="/images/intro.webp"
        alt="intro"
        fill={true}
        priority={true}
        sizes="(max-width: 768px) 100vw"
        className="absolute inset-0 object-cover object-[58%_center] w-full h-full brightness-65"
      />

      <Trail open={isInView}>
        <p className="absolute top-20 flex flex-col w-full z-10 text-4xl text-center text-white font-sometimes-times">
          Young Su & Hyun A
        </p>
      </Trail>

      <Trail open={isInView} delay={200}>
        <div className="absolute bottom-20 flex flex-col w-full z-10 text-base text-center gap-2 text-white">
          <span>2026년 3월 7일 토요일 오후 1시 40분</span>

          <span>부산 아시아드시티 웨딩홀 고흐홀</span>
        </div>
      </Trail>
    </section>
  )
}

export default IntroSection
