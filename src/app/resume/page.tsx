import {
  Achievements,
  Career,
  CoreSkills,
  Education,
  ResumeHeader,
  TechStack,
} from './components'

export default function Resume() {
  return (
    <div className="min-h-screen bg-white font-pretendard overflow-hidden">
      {/* 인쇄 시에만 보이는 헤더 */}
      <div className="print:block hidden">
        <h1 className="text-2xl font-bold text-center mb-4">김영수 - 이력서</h1>
        <div className="text-center text-gray-600 mb-6">
          {new Date().toLocaleDateString('ko-KR')} 기준
        </div>
      </div>

      {/* 메인 이력서 컨테이너 */}
      <div className="max-w-6xl mx-auto p-6 print:p-0 print:max-w-none">
        {/* 헤더 섹션 */}
        <ResumeHeader />

        {/* 메인 컨텐츠 - 두 컬럼 구조 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 print:grid-cols-4">
          {/* 왼쪽 컬럼 - 경력 요약 */}
          <div className="lg:col-span-1 print:col-span-1">
            <TechStack />
            <CoreSkills />
            <Education />
          </div>

          {/* 오른쪽 컬럼 - 상세 경력 */}
          <div className="lg:col-span-3 print:col-span-3">
            <Career />
            <Achievements />
          </div>
        </div>

        {/* 인쇄 시 하단 여백 */}
        <div className="print:mb-8" />
      </div>
    </div>
  )
}
