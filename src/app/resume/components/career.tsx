export function Career() {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 print:text-2xl print:mb-4 border-b-2 border-gray-400 pb-2">
        Career
      </h2>

      {/* (주)브라이트에너지파트너스 */}
      <div className="mb-8 print:mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <h3 className="font-bold text-gray-900 text-lg print:text-base">
              (주)브라이트에너지파트너스
            </h3>
            <p className="text-sm text-gray-600 print:text-xs">
              2024.06 - 현재
            </p>
          </div>
          <div className="col-span-3">
            <div className="space-y-4 print:space-y-3">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 print:text-sm">
                    공식 홈페이지 프레임워크 마이그레이션
                  </h4>
                  <span className="text-sm text-gray-600 print:text-xs">
                    2024.06 - 2024.08
                  </span>
                </div>
                <p className="text-gray-600 text-sm print:text-xs mb-2">
                  기존 JSP 기반 홈페이지를 Next.js로 전환하여 SEO 성능 및 사용자
                  경험 개선
                </p>
                <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                  <li>
                    • 레거시 JSP 시스템을 최신 Next.js 프레임워크로 마이그레이션
                  </li>
                  <li>• SSG/SSR 최적화를 통한 SEO 성능 및 사용자 경험 개선</li>
                  <li>• 컴포넌트 기반 아키텍처로 유지보수성 향상</li>
                </ul>
                <p className="text-gray-500 text-xs mt-2 print:text-xs">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 print:text-sm">
                    CSMS 리팩토링
                  </h4>
                  <span className="text-sm text-gray-600 print:text-xs">
                    2024.09 - 2024.12
                  </span>
                </div>
                <p className="text-gray-600 text-sm print:text-xs mb-2">
                  충전소 관리 시스템 전체 리팩토링으로 개발 속도 40%, 업무
                  효율성 30% 향상
                </p>
                <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                  <li>• TypeScript 도입으로 런타임 에러 90% 이상 감소</li>
                  <li>• 컴포넌트 재사용성 향상으로 개발 속도 40% 개선</li>
                  <li>• React Query를 활용한 서버 상태 관리 최적화</li>
                  <li>
                    • 단일 코드베이스로 5개 이상 충전소 브랜드 멀티 테넌트 구현
                  </li>
                </ul>
                <p className="text-gray-500 text-xs mt-2 print:text-xs">
                  TypeScript, React, Next.js, GraphQL, Tailwind CSS, Zustand,
                  React Query
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 print:text-sm">
                    충전소 공사 일지 관리 시스템
                  </h4>
                  <span className="text-sm text-gray-600 print:text-xs">
                    2025.01 - 현재
                  </span>
                </div>
                <p className="text-gray-600 text-sm print:text-xs mb-2">
                  GraphQL 기반 충전소 설치 및 유지보수 관리 시스템
                </p>
                <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                  <li>• GraphQL을 활용한 효율적인 데이터 페칭 및 상태 관리</li>
                  <li>• React Hook Form과 Zod를 활용한 강력한 폼 validation</li>
                  <li>
                    • React Table을 이용한 대용량 데이터 처리 및 표시 최적화
                  </li>
                </ul>
                <p className="text-gray-500 text-xs mt-2 print:text-xs">
                  GraphQL, React Hook Form, Zod, React Table
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 주식회사 큐엠아이티 */}
      <div className="mb-8 print:mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <h3 className="font-bold text-gray-900 text-lg print:text-base">
              주식회사 큐엠아이티
            </h3>
            <p className="text-sm text-gray-600 print:text-xs">
              2023.07 - 2024.05
            </p>
          </div>
          <div className="col-span-3">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800 print:text-sm">
                  PLCO Coach 마이그레이션 프로젝트
                </h4>
                <span className="text-sm text-gray-600 print:text-xs">
                  2023.07 - 2024.05
                </span>
              </div>
              <p className="text-gray-600 text-sm print:text-xs mb-2">
                팀 소속 선수의 컨디션 및 부상 데이터 관리 B2B 서비스
              </p>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                <li>
                  • Next.js v11에서 v14로 마이그레이션을 통한 성능 및 개발 환경
                  개선
                </li>
                <li>• 디자인 시스템 라이브러리 구축으로 UI 개발 일관성 확보</li>
                <li>• Google Sheets 연동으로 국제화 텍스트 관리 자동화 구현</li>
              </ul>
              <p className="text-gray-500 text-xs mt-2 print:text-xs">
                TypeScript, React (Next.js v14), Panda CSS, Zustand, Apollo
                Client
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 주식회사 무스마 */}
      <div className="mb-8 print:mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <h3 className="font-bold text-gray-900 text-lg print:text-base">
              주식회사 무스마
            </h3>
            <p className="text-sm text-gray-600 print:text-xs">
              2019.05 - 2023.07
            </p>
          </div>
          <div className="col-span-3">
            <div className="space-y-4 print:space-y-3">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 print:text-sm">
                    대동모빌리티 e-Bike 관제 시스템
                  </h4>
                  <span className="text-sm text-gray-600 print:text-xs">
                    2022.12 - 2023.07
                  </span>
                </div>
                <p className="text-gray-600 text-sm print:text-xs mb-2">
                  전기 오토바이의 실시간 위치 및 상태 모니터링 시스템
                </p>
                <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                  <li>
                    • 카카오 지도 API 활용한 실시간 차량 추적 대시보드 개발
                  </li>
                  <li>• 코드 스플리팅 적용으로 초기 로딩 속도 4초 개선</li>
                  <li>• 공통 라이브러리 도입으로 UI 개발 기간 10% 단축</li>
                </ul>
                <p className="text-gray-500 text-xs mt-2 print:text-xs">
                  TypeScript, React, Emotion, Recoil, Apollo Client
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 print:text-sm">
                    공통 라이브러리 개발
                  </h4>
                  <span className="text-sm text-gray-600 print:text-xs">
                    2022.04 - 2022.08
                  </span>
                </div>
                <p className="text-gray-600 text-sm print:text-xs mb-2">
                  개발 생산성 향상을 위한 사내 라이브러리 구축
                </p>
                <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                  <li>• 디자인 시스템 정립 및 UI 컴포넌트 라이브러리 개발</li>
                  <li>
                    • SVG 컴포넌트 라이브러리 및 공통 React Hooks 라이브러리
                    구축
                  </li>
                  <li>• Changesets를 활용한 체계적인 버전 관리 시스템 구축</li>
                </ul>
                <p className="text-gray-500 text-xs mt-2 print:text-xs">
                  TypeScript, React, Emotion, Storybook, @svgr/cli, Changesets
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 print:text-sm">
                    현대중공업 중장비 모니터링 시스템
                  </h4>
                  <span className="text-sm text-gray-600 print:text-xs">
                    2021.10 - 2022.05
                  </span>
                </div>
                <p className="text-gray-600 text-sm print:text-xs mb-2">
                  건설 현장 중장비의 실시간 상태 모니터링 서비스
                </p>
                <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                  <li>• 재사용 가능한 UI Elements 컴포넌트 개발</li>
                  <li>
                    • Storybook을 활용한 컴포넌트 문서화 및 테스트 환경 구축
                  </li>
                </ul>
                <p className="text-gray-500 text-xs mt-2 print:text-xs">
                  TypeScript, React, Tailwind CSS, Emotion, MobX, Storybook
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 print:text-sm">
                    삼성엔지니어링 MCAS
                  </h4>
                  <span className="text-sm text-gray-600 print:text-xs">
                    2020.05 - 2021.10
                  </span>
                </div>
                <p className="text-gray-600 text-sm print:text-xs mb-2">
                  건설 현장의 통합 관리 모니터링 서비스 (웹 + 모바일)
                </p>
                <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                  <li>• Google Maps API 기반 실시간 위치 추적 대시보드 개발</li>
                  <li>• React Native를 활용한 크로스 플랫폼 모바일 앱 개발</li>
                  <li>
                    • GitHub Actions를 통한 APK 빌드 자동화 파이프라인 구축
                  </li>
                </ul>
                <p className="text-gray-500 text-xs mt-2 print:text-xs">
                  React, React Native, MobX, TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 주식회사 탐생 */}
      <div className="mb-8 print:mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <h3 className="font-bold text-gray-900 text-lg print:text-base">
              주식회사 탐생
            </h3>
            <p className="text-sm text-gray-600 print:text-xs">
              2017.05 - 2019.04
            </p>
          </div>
          <div className="col-span-3">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800 print:text-sm">
                  스터디헬퍼 Android 앱 개발
                </h4>
                <span className="text-sm text-gray-600 print:text-xs">
                  2017.07 - 2018.10
                </span>
              </div>
              <p className="text-gray-600 text-sm print:text-xs mb-2">
                학습 집중도 향상을 위한 스마트폰 사용 제한 애플리케이션
              </p>
              <ul className="text-gray-600 text-sm print:text-xs space-y-1 ml-4">
                <li>• Android 네이티브 개발 기초 역량 구축</li>
                <li>• DataBinding 패턴 학습을 통한 MVVM 아키텍처 이해</li>
                <li>• Firebase FCM을 활용한 실시간 통신 구현</li>
              </ul>
              <p className="text-gray-500 text-xs mt-2 print:text-xs">
                Android, Java, DataBinding, FCM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
