'use client'

import { useInView } from '@react-spring/web'
import Image from 'next/image'

import Trail from 'src/components/trail'

const IntroSection = () => {
  const [ref, isInView] = useInView({
    amount: 0.5,
    once: true,
  })

  // 꽃잎 색상 배열 (하얀색 계열)

  return (
    <section ref={ref} className="flex flex-col relative h-svh">
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

          <span>부산 아시아드 시티 웨딩홀</span>
        </div>
      </Trail>
    </section>
  )
}

export default IntroSection
