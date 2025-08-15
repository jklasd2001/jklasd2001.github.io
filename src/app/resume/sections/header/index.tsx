import Image from 'next/image'

import profile from 'images/resume/profile.png'

export function ResumeHeader() {
  return (
    <header className="mb-8 print:mb-6">
      <div className="flex items-start space-y-4 md:space-x-12 flex-col md:flex-row md:items-center md:space-x-y">
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

      {/* 자기소개 */}
      <div className="mt-6 text-gray-800 text-lg space-y-3">
        <p>
          8년차 프론트엔드 개발자 김영수입니다. 웹 애플리케이션부터 React Native
          기반 모바일 애플리케이션까지 다양한 플랫폼 개발 경험을 보유하고
          있으며, 새로운 기술과 트렌드를 빠르게 습득하고 팀에 공유하는 것을
          즐깁니다.
        </p>

        <p>
          최근에는 레거시 애플리케이션을 Next.js로 마이그레이션하는 작업을 주로
          담당하고 있습니다. 성능 향상과 사용자 경험 개선에 중점을 두고
          있습니다.
        </p>
      </div>
    </header>
  )
}
