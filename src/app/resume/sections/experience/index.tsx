import { Fragment } from 'react'

import { SectionContainer } from '../../components/section-container'
import SectionContent from '../../components/section-content'
import { SectionTitle } from '../../components/section-title'
import { CompanyInfo } from './company-info'
import ProjectItem from './project-item'

export function Experience() {
  return (
    <SectionContainer>
      <SectionTitle>Experience</SectionTitle>

      {/* (주)브라이트에너지파트너스 */}
      <div className="flex flex-col gap-8 print:gap-6">
        <div className="flex gap-4 flex-col md:flex-row">
          <CompanyInfo
            name="브라이트에너지파트너스"
            period="2024.06 - 현재"
            className="basis-auto md:basis-[200px]"
          />

          <SectionContent>
            <ProjectItem
              title={
                <Fragment>
                  <a
                    href="https://apps.apple.com/kr/app/%EC%9B%8C%ED%84%B0-water/id1633980849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Water
                  </a>
                  {' WebView 마이그레이션'}
                </Fragment>
              }
              description="JSP로 구현된 WebView 영역을 Next.js로 마이그레이션"
              improvements={['SSR 방식으로 구현하여 페이지 로딩 속도 개선']}
              skills={[
                'React',
                'Next.js',
                'Zustand',
                'TypeScript',
                'Panda CSS',
              ]}
              period="2025.07 - 진행중"
            />

            <ProjectItem
              title="전기차 충전소 관리 시스템 유지보수 및 리팩토링"
              description="충전소 관리 시스템 전체 리팩토링으로 개발 속도 40%, 업무 효율성 30% 향상"
              improvements={[
                'React Query를 도입하여 API 호출 빈도 30% 감소',
                '코드 스플리팅 적용으로 초기 로딩 속도 2초 개선',
                '필터 상태 데이터를 Search Params로 관리하여 브라우저 새로고침 및 공유 시 상태 유지',
              ]}
              skills={[
                'React',
                'Zustand',
                'TypeScript',
                'Panda CSS',
                'React Query',
                'nuqs',
              ]}
              period="2024.07 - 진행중"
            />

            <ProjectItem
              title={
                <Fragment>
                  <a
                    href="https://www.water.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Water 홈페이지
                  </a>

                  {' 마이그레이션'}
                </Fragment>
              }
              description="JSP 기반 홈페이지를 Next.js로 마이그레이션"
              improvements={[
                '실시간성이 중요하지 않은 페이지는 ISR 방식으로 페이지 로딩 속도 개선',
                'Parallel Routes를 활용하여 Dialog의 열림/닫힘 상태를 URL과 동기화하고, 브라우저 뒤로가기로 자연스럽게 모달을 제어할 수 있는 사용자 경험 개선',
              ]}
              skills={['React', 'Next.js', 'TypeScript', 'Panda CSS']}
              period="2024.08 - 2024.10"
            />
          </SectionContent>
        </div>

        {/* 주식회사 큐엠아이티 */}
        <div className="flex gap-4 flex-col md:flex-row">
          <CompanyInfo
            name="주식회사 큐엠아이티"
            period="2023.07 - 2024.05"
            className="basis-auto md:basis-[200px]"
          />

          <SectionContent>
            <ProjectItem
              title={
                <Fragment>
                  <a
                    href="https://app.coach.plco.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    PLCO Coach
                  </a>

                  {' 마이그레이션'}
                </Fragment>
              }
              description="팀 소속선수의 컨디션, 부상 데이터를 확인하고 관리할 수 있는 B2B 서비스"
              improvements={[
                'Next.js v11에서 v14로 마이그레이션을 통한 성능 및 개발 환경 개선',
                '디자인 시스템 라이브러리 개발 및 배포',
                'Google Sheets API를 활용한 국제화 텍스트 관리 자동화 구현',
              ]}
              skills={[
                'React',
                'Next.js',
                'TypeScript',
                'Panda CSS',
                'Apollo Client',
              ]}
              period="2023.07 - 2024.05"
            />
          </SectionContent>
        </div>

        {/* 주식회사 무스마 */}
        <div className="flex gap-4 flex-col md:flex-row">
          <CompanyInfo
            name="주식회사 무스마"
            period="2019.05 - 2023.07"
            className="basis-auto md:basis-[200px]"
          />

          <SectionContent>
            <ProjectItem
              title="대동모빌리티 e-Bike 관제 시스템"
              description="전기 오토바이의 실시간 위치 및 상태 모니터링 시스템"
              improvements={[
                '카카오 지도 API를 활용한 실시간 차량 추적 대시보드 개발',
                '코드 스플리팅 적용으로 초기 로딩 속도 2초 개선',
                '공통 라이브러리 도입으로 UI 개발 기간 10% 단축',
              ]}
              skills={[
                'React',
                'TypeScript',
                'Emotion',
                'Recoil',
                'Apollo Client',
              ]}
              period="2022.12 - 2023.07"
            />

            <ProjectItem
              title="공통 라이브러리 개발"
              description="개발 생산성 향상을 위한 라이브러리 구축"
              improvements={[
                '디자인 시스템 정립 및 UI 컴포넌트 라이브러리 개발',
                '유틸리티 커스텀 훅 라이브러리 개발',
                'Changesets를 활용한 체계적인 버전 관리 시스템 구축',
              ]}
              skills={[
                'TypeScript',
                'React',
                'Emotion',
                'Storybook',
                '@svgr/cli',
                'Changesets',
              ]}
              period="2022.04 - 2022.08"
            />

            <ProjectItem
              title="건설현장 모니터링 시스템"
              description="근로자, 중장비, 자재 위치 모니터링 시스템으로 건설 현장 관리 효율성 향상"
              improvements={[
                'Google Maps API를 활용한 건설 장비 실시간 위치 모니터링 시스템 개발',
                'React Native를 활용한 크로스 플랫폼 모바일 앱 개발',
                'APK 빌드 및 스토어 배포 자동화',
              ]}
              skills={[
                'TypeScript',
                'React',
                'React Native',
                'Emotion',
                'MobX',
                'Apollo Client',
              ]}
              period="2020.05 - 2022.05"
            />
          </SectionContent>
        </div>

        {/* 주식회사 탐생 */}
        <div className="flex gap-4 flex-col md:flex-row">
          <CompanyInfo
            name="주식회사 탐생"
            period="2017.05 - 2019.04"
            className="basis-auto md:basis-[200px]"
          />

          <SectionContent>
            <ProjectItem
              title="스터디헬퍼 Android 앱 개발"
              description="설정한 시간까지 스마트폰을 사용하지 못하게 하는 잠금 기능과 시간 측정 기능으로 공부 시간에 집중을 도와주는 모바일 애플리케이션"
              improvements={[
                '애플리케이션 개발 시작부터 스토어 출시까지 전체 프로세스 경험',
                'Firebase FCM을 활용한 실시간 통신 구현',
              ]}
              skills={['Android', 'Java']}
              period="2017.07 - 2018.10"
            />
          </SectionContent>
        </div>
      </div>
    </SectionContainer>
  )
}
