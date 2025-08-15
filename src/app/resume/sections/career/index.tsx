import { Fragment } from 'react'

import { SectionContainer } from '../../components/section-container'
import SectionContent from '../../components/section-content'
import { SectionTitle } from '../../components/section-title'
import { CompanyInfo } from './company-info'
import ProjectItem from './project-item'

export function Career() {
  return (
    <SectionContainer>
      <SectionTitle>Career</SectionTitle>

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
                  {' WebView JSP -> Next.js 마이그레이션'}
                </Fragment>
              }
              description="JSP로 구현된 모바일 앱 내 WebView 영역을 Next.js로 마이그레이션"
              skills={['React', 'Next.js', 'TypeScript', 'Panda CSS']}
              period="2025.07 - 진행중"
            />

            <ProjectItem
              title="전기차 충전소 관리 시스템 유지보수 및 리팩토링"
              description="충전소 관리 시스템 전체 리팩토링으로 개발 속도 40%, 업무 효율성 30% 향상"
              improvements={[
                'Reqct Query를 도입하여 데이터 페칭 빈도 50% 감소',
                'Sentry를 활용한 에러 로깅 및 모니터링 시스템 구축',
              ]}
              skills={['React', 'Next.js', 'TypeScript', 'Panda CSS']}
              period="2024.07 - 진행중"
            />

            <ProjectItem
              title="전기차 충전소 공사 일지 관리 시스템"
              description="GraphQL 기반 충전소 설치 및 유지보수 관리 시스템"
              improvements={[
                'GraphQL을 활용한 효율적인 데이터 페칭 및 상태 관리',
              ]}
              skills={['React', 'Next.js', 'TypeScript', 'Panda CSS']}
              period="2024.11 - 2025.01"
            />

            <ProjectItem
              title="워터 홈페이지"
              description="기존 JSP 기반 홈페이지를 Next.js로 전환하여 SEO 성능 및 사용자 경험 개선"
              improvements={[
                'SSG/SSR 최적화를 통한 SEO 성능 및 사용자 경험 개선',
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
              title="PLCO Coach 마이그레이션 프로젝트"
              description="선수의 컨디션 및 부상 관리 서비스"
              improvements={[
                'Next.js v11에서 v14로 마이그레이션을 통한 성능 및 개발 환경 개선',
                '디자인 시스템 라이브러리 구축으로 UI 개발 일관성 확보',
                'Google Sheets 연동으로 국제화 텍스트 관리 자동화 구현',
              ]}
              skills={['React', 'Next.js', 'TypeScript', 'Panda CSS']}
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
                'Next.js',
                'TypeScript',
                'Panda CSS',
                'Recoil',
                'Apollo Client',
              ]}
              period="2022.12 - 2023.07"
            />

            <ProjectItem
              title="공통 라이브러리 개발"
              description="개발 생산성 향상을 위한 사내 라이브러리 구축"
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
              title="현대중공업 중장비 모니터링 시스템"
              description="건설 현장의 통합 관리 모니터링 서비스 (웹 + 모바일)"
              improvements={[
                'Google Maps를 활용한 건설 장비 실시간 위치 모니터링 시스템 개발',
                'React Native를 활용한 크로스 플랫폼 모바일 앱 개발',
                'APK 빌드 및 스토어 배포 자동화',
              ]}
              skills={['React', 'React Native', 'MobX', 'TypeScript']}
              period="2021.10 - 2022.05"
            />

            <ProjectItem
              title="삼성엔지니어링 MCAS"
              description="삼성엔지니어링 MCAS 프로젝트"
              improvements={[
                'React Native를 활용한 크로스 플랫폼 모바일 앱 개발',
                'APK 빌드 및 스토어 배포 자동화',
              ]}
              skills={['React', 'React Native', 'MobX', 'TypeScript']}
              period="2020.05 - 2021.10"
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
              description="학습 집중도 향상을 위한 스마트폰 사용 제한 애플리케이션"
              improvements={[
                'Android 네이티브 개발 기초 역량 구축',
                'Firebase FCM을 활용한 실시간 통신 구현',
              ]}
              skills={['Android', 'Java', 'Firebase']}
              period="2017.07 - 2018.10"
            />
          </SectionContent>
        </div>
      </div>
    </SectionContainer>
  )
}
