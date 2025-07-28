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
          <span>사람이 온다는 건 실은 어마어마한 일이다.</span>

          <span>그는 그의 과거와 현재와 그리고</span>

          <span>그의 미래와 함께 오기 때문이다.</span>

          <span>한 사람의 일생이 오기 때문이다.</span>

          <br />

          <span>- 정현종, '방문객'</span>

          <br />

          <span>저희 두 사람이 함께하는 새로운 시작에</span>

          <span>귀한 발걸음으로 축복해 주시면 감사하겠습니다.</span>

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
