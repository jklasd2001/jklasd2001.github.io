'use client'

import { useInView } from '@react-spring/web'

import Trail from 'src/components/trail'

export default function WeddingDay() {
  const [ref, isInView] = useInView({
    amount: 0.8,
    once: true,
  })

  return (
    <section ref={ref} className="h-screen bg-[#a0b575]" style={{}}>
      <div className="flex flex-col items-center justify-center h-full text-[96px] text-8xl font-sometimes-times text-white">
        <div>
          <Trail open={isInView}>
            <span>M</span>
            <span>A</span>
            <span>R</span>
            <span> </span>
            <span>7</span>
          </Trail>
        </div>

        <div>
          <Trail open={isInView}>
            <span>2</span>
            <span>0</span>
            <span>2</span>
            <span>6</span>
          </Trail>
        </div>
      </div>
    </section>
  )
}
