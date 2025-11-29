'use client'

import { useInView } from '@react-spring/web'

import Trail from 'src/components/trail'

import Rebon from './rebon'

const GreetingSection = () => {
  const [ref, isInView] = useInView({
    amount: 0.5,
    once: true,
  })

  return (
    <section ref={ref} className="py-20 flex flex-col items-center">
      <Trail open={isInView}>
        <div className="w-[160px] h-[52px] mb-10">
          <Rebon />
        </div>
      </Trail>

      <div className="flex flex-col text-center leading-8 text-[#555] text-[15.2px]">
        <Trail open={isInView} duration={150}>
          <span>두 사람의 계절이 만나</span>

          <span>하나의 봄을 피웁니다</span>

          <span>사랑으로 쌓아온 오늘을</span>

          <span>영원으로 약속하려 합니다.</span>

          <span>저희의 가장 빛나는 순간에</span>

          <span>함께해 주세요.</span>

          <br />

          <span className="text-black-secondary">
            신랑 김영수 · 신부 박현아
          </span>
        </Trail>
      </div>
    </section>
  )
}

export default GreetingSection
