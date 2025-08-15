import Image from 'next/image'

import profile from 'images/resume/profile.png'

export function ResumeHeader() {
  return (
    <header className="mb-8 print:mb-6">
      <div className="flex items-start justify-between">
        {/* 왼쪽: 프로필 정보 */}
        <div className="flex items-center space-x-6 md:space-x-12">
          <Image
            src={profile}
            alt="profile"
            priority={true}
            quality={100}
            width={192}
            height={192}
            className="md:w-48 md:h-48 w-32 h-32 print:w-28 print:h-28"
          />

          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-1 print:text-3xl">
                김영수
              </h1>

              <p className="text-xl text-gray-700 mb-1 print:text-lg">
                Frontend Developer
              </p>
            </div>

            <div>
              <p className="flex items-center space-x-2 mb-1">
                <span className="font-bold text-gray-800">Email.</span>

                <a
                  href="mailto:jklasd2001@gmail.com"
                  className="underline transition-colors text-gray-800"
                >
                  jklasd2001@gmail.com
                </a>
              </p>

              <p className="flex items-center space-x-2 mb-1">
                <span className="font-bold text-gray-800">Phone.</span>

                <a
                  href="tel:010-4176-4839"
                  className="underline transition-colors text-gray-800"
                >
                  +82 10-4176-4839
                </a>
              </p>

              <p className="flex items-center space-x-2 mb-1">
                <span className="font-bold text-gray-800">Github.</span>

                <a
                  href="https://github.com/jklasd2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-gray-800"
                >
                  github.com/jklasd2001
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 자기소개 */}
      <div className="mt-6">
        <p className="text-gray-800 leading-relaxed text-lg print:text-lg">
          8년차 프론트엔드 개발자로서 웹 애플리케이션부터 React Native 기반
          모바일 앱까지 다양한 플랫폼 개발 경험을 했습니다. 레거시 시스템
          마이그레이션과 성능 최적화를 통해 사용자 경험을 획기적으로 개선하며,
          디자인 시스템 구축과 공통 라이브러리 개발을 통해 팀의 개발 생산성 향상
          및 일관성 있는 개발 환경을 구축했습니다.
        </p>
      </div>
    </header>
  )
}
