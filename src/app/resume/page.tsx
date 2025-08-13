export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* 인쇄 시에만 보이는 헤더 */}
      <div className="print:block hidden">
        <h1 className="text-2xl font-bold text-center mb-4">김영수 - 이력서</h1>
        <div className="text-center text-gray-600 mb-6">
          {new Date().toLocaleDateString('ko-KR')} 기준
        </div>
      </div>

      {/* 메인 이력서 컨테이너 */}
      <div className="max-w-4xl mx-auto p-6 print:p-0 print:max-w-none">
        {/* 헤더 섹션 */}
        <header className="mb-8 print:mb-6">
          <div className="text-center print:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 print:text-3xl">
              김영수
            </h1>
            <p className="text-xl text-gray-600 mb-4 print:text-lg">
              Frontend Developer
            </p>
            <div className="flex flex-wrap justify-center print:justify-start gap-4 text-sm text-gray-600 print:text-xs">
              <span>📧 kimyoungsu@example.com</span>
              <span>📱 010-1234-5678</span>
              <span>📍 서울시 강남구</span>
              <span>🌐 github.com/kimyoungsu</span>
            </div>
          </div>
        </header>

        {/* 자기소개 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl print:mb-3 border-b-2 border-gray-300 pb-2">
            자기소개
          </h2>
          <p className="text-gray-700 leading-relaxed print:text-sm">
            React와 Next.js를 활용한 현대적인 웹 애플리케이션 개발에 전문성을
            가지고 있으며, 사용자 경험을 중시하는 프론트엔드 개발자입니다. 팀
            협업과 지속적인 학습을 통해 최신 기술 트렌드를 반영한 솔루션을
            제공합니다.
          </p>
        </section>

        {/* 기술 스택 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl print:mb-3 border-b-2 border-gray-300 pb-2">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:grid-cols-3">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
                Frontend
              </h3>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1">
                <li>• React, Next.js, TypeScript</li>
                <li>• Tailwind CSS, Styled Components</li>
                <li>• Redux, Zustand, React Query</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
                Backend
              </h3>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1">
                <li>• Node.js, Express</li>
                <li>• PostgreSQL, MongoDB</li>
                <li>• REST API, GraphQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
                DevOps
              </h3>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1">
                <li>• Docker, AWS, Vercel</li>
                <li>• Git, GitHub Actions</li>
                <li>• Jest, Cypress</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 경력 사항 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl print:mb-3 border-b-2 border-gray-300 pb-2">
            경력 사항
          </h2>
          <div className="space-y-6 print:space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex justify-between items-start mb-2 print:mb-1">
                <h3 className="font-semibold text-gray-800 print:text-sm">
                  ABC 테크 - Frontend Developer
                </h3>
                <span className="text-sm text-gray-600 print:text-xs">
                  2022.03 - 현재
                </span>
              </div>
              <p className="text-gray-600 text-sm print:text-xs mb-2">
                React 기반 웹 애플리케이션 개발 및 유지보수
              </p>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                <li>• Next.js를 활용한 SSR/SSG 웹사이트 구축</li>
                <li>• TypeScript 기반 타입 안전성 확보</li>
                <li>• 팀 내 코드 리뷰 및 기술 공유 주도</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex justify-between items-start mb-2 print:mb-1">
                <h3 className="font-semibold text-gray-800 print:text-sm">
                  XYZ 스타트업 - Junior Developer
                </h3>
                <span className="text-sm text-gray-600 print:text-xs">
                  2021.01 - 2022.02
                </span>
              </div>
              <p className="text-gray-600 text-sm print:text-xs mb-2">
                Vue.js 기반 관리자 페이지 개발
              </p>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                <li>• Vue 3 Composition API 활용</li>
                <li>• Element Plus UI 라이브러리 적용</li>
                <li>• REST API 연동 및 데이터 처리</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 프로젝트 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl print:mb-3 border-b-2 border-gray-300 pb-2">
            주요 프로젝트
          </h2>
          <div className="space-y-6 print:space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2 print:mb-1">
                <h3 className="font-semibold text-gray-800 print:text-sm">
                  E-commerce 플랫폼
                </h3>
                <span className="text-sm text-gray-600 print:text-xs">
                  2023.06 - 2023.12
                </span>
              </div>
              <p className="text-gray-600 text-sm print:text-xs mb-2">
                Next.js 14, TypeScript, Tailwind CSS를 활용한 전자상거래 플랫폼
              </p>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                <li>• App Router와 Server Components 활용</li>
                <li>• 결제 시스템 연동 (토스페이먼츠)</li>
                <li>• 반응형 디자인 및 PWA 지원</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2 print:mb-1">
                <h3 className="font-semibold text-gray-800 print:text-sm">
                  관리자 대시보드
                </h3>
                <span className="text-sm text-gray-600 print:text-xs">
                  2023.01 - 2023.05
                </span>
              </div>
              <p className="text-gray-600 text-sm print:text-xs mb-2">
                React, Material-UI를 활용한 데이터 시각화 대시보드
              </p>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                <li>• Chart.js를 활용한 데이터 차트 구현</li>
                <li>• 실시간 데이터 업데이트 및 알림 시스템</li>
                <li>• 권한 기반 접근 제어 구현</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 학력 및 자격증 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl print:mb-3 border-b-2 border-gray-300 pb-2">
            학력 및 자격증
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
                학력
              </h3>
              <div className="text-gray-600 text-sm print:text-xs">
                <p>• 서울대학교 컴퓨터공학과 졸업</p>
                <p>• 2017.03 - 2021.02</p>
                <p>• GPA: 4.2/4.5</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
                자격증
              </h3>
              <div className="text-gray-600 text-sm print:text-xs">
                <p>• AWS Solutions Architect Associate</p>
                <p>• SQLD (SQL 개발자)</p>
                <p>• 정보처리기사</p>
              </div>
            </div>
          </div>
        </section>

        {/* 언어 능력 */}
        <section className="mb-8 print:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 print:text-xl print:mb-3 border-b-2 border-gray-300 pb-2">
            언어 능력
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:grid-cols-3">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
                한국어
              </h3>
              <p className="text-gray-600 text-sm print:text-xs">
                • 모국어 (원어민 수준)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
                영어
              </h3>
              <p className="text-gray-600 text-sm print:text-xs">
                • TOEIC 900점
              </p>
              <p className="text-gray-600 text-sm print:text-xs">
                • 기술 문서 읽기/작성 가능
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
                일본어
              </h3>
              <p className="text-gray-600 text-sm print:text-xs">• JLPT N2</p>
              <p className="text-gray-600 text-sm print:text-xs">
                • 기본적인 의사소통 가능
              </p>
            </div>
          </div>
        </section>

        {/* 인쇄 시 하단 여백 */}
        <div className="print:mb-8" />
      </div>
    </div>
  )
}
