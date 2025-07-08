import Image from 'next/image'

import { AspectRatio } from 'src/components/ui/aspect-ratio'

const IntroSection = () => {
  return (
    <section>
      <AspectRatio ratio={1 / 1}>
        <Image src="/images/image.png" alt="intro" fill={true} />
      </AspectRatio>

      <h1
        className="text-[42px] font-[400] text-right font-nanummyeongjo"
        style={
          {
            // lineHeight: '1.250rem',
            // letterSpacing: '0.2em',
            // fontSize: '1rem',
          }
        }
      >
        이지훈 / 유수진
      </h1>

      <p className="flex flex-col gap-1 text-right font-nanummyeongjo text-2xl">
        <span>토요일 오후 1시 30분</span>
        <span>부산 아시아드 시티 웨딩홀</span>
      </p>
    </section>
  )
}

export default IntroSection
