import { Career } from './sections/career'
import { Education } from './sections/education'
import { ResumeHeader } from './sections/header'
import { TechStack } from './sections/tech-stack'

export default function Resume() {
  return (
    <div className="min-h-screen bg-white font-pretendard">
      {/* 인쇄 시에만 보이는 헤더 */}
      <div className="print:block hidden">
        <h1 className="text-2xl font-bold text-center mb-4">김영수 - 이력서</h1>
        <div className="text-center text-gray-600 mb-6">
          {new Date().toLocaleDateString('ko-KR')} 기준
        </div>
      </div>

      {/* 메인 이력서 컨테이너 */}
      <div className="max-w-3xl mx-auto p-6 print:py-0 print:max-w-none">
        <ResumeHeader />

        {/* 메인 컨텐츠 - 단일 컬럼 구조 */}
        <div className="space-y-8 print:space-y-6">
          {/* 경력 사항 */}
          <Career />

          {/* 성과 및 프로젝트 */}

          {/* 기술 스택 */}
          <TechStack />

          {/* 핵심 역량 */}

          {/* 학력 및 자격증 */}
          <Education />
        </div>

        {/* 인쇄 시 하단 여백 */}
        <div className="print:mb-8" />
      </div>
    </div>
  )
}
