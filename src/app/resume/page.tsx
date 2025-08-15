import { Education } from './sections/education'
import { Experience } from './sections/experience'
import { ResumeHeader } from './sections/header'
import { PrintMetadata } from './sections/print-metadata'
import { TechStack } from './sections/tech-stack'

export default function Resume() {
  return (
    <div className="min-h-[100svh] bg-white font-pretendard">
      {/* 인쇄 시에만 보이는 헤더 */}
      <PrintMetadata />

      {/* 메인 이력서 컨테이너 */}
      <div className="max-w-3xl mx-auto p-6 print:py-0 print:max-w-none">
        <ResumeHeader />

        {/* 메인 컨텐츠 - 단일 컬럼 구조 */}
        <div className="space-y-8 print:space-y-6">
          {/* 경력 사항 */}
          <Experience />

          {/* 기술 스택 */}
          <TechStack />

          {/* 학력 및 자격증 */}
          <Education />
        </div>

        {/* 인쇄 시 하단 여백 */}
        <div className="print:mb-8" />
      </div>
    </div>
  )
}
