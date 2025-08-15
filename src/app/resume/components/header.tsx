import { Globe, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

import profile from '../../../../public/images/resume/profile.png'

export function ResumeHeader() {
  return (
    <header className="mb-8 print:mb-6">
      <div className="flex items-start justify-between">
        {/* 왼쪽: 프로필 정보 */}
        <div className="flex items-center space-x-4">
          <div className="w-48 h-48 rounded-full flex items-center justify-center print:w-28 print:h-28 overflow-hidden">
            <Image
              src={profile}
              alt="profile"
              priority={true}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-1 print:text-3xl">
              김영수
            </h1>

            <p className="text-xl text-gray-700 mb-1 print:text-lg">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* 오른쪽: 연락처 정보 */}
        <div className="text-left text-base text-gray-700 print:text-sm">
          <p className="flex items-center space-x-2 mb-1">
            <Mail className="w-5 h-5 text-gray-700" />

            <a
              href="mailto:jklasd2001@gmail.com"
              className="underline transition-colors text-gray-800"
            >
              jklasd2001@gmail.com
            </a>
          </p>

          <p className="flex items-center space-x-2 mb-1">
            <Phone className="w-5 h-5 text-gray-700" />

            <a
              href="tel:010-4176-4839"
              className="underline transition-colors text-gray-800"
            >
              010-4176-4839
            </a>
          </p>

          <p className="flex items-center space-x-2 mb-1">
            <Globe className="w-5 h-5 text-gray-700" />

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

      {/* 자기소개 */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg print:bg-transparent print:p-0">
        <p className="text-gray-800 leading-relaxed text-base print:text-sm">
          8년차 프론트엔드 개발자로서 웹 애플리케이션부터 React Native 기반
          모바일 앱까지 다양한 플랫폼 개발 경험을 보유하고 있습니다. 레거시
          시스템 모던화와 성능 최적화를 통해 사용자 경험을 획기적으로 개선하며,
          디자인 시스템 구축과 공통 라이브러리 개발을 통해 팀의 개발 생산성을
          40% 향상시켰습니다.
        </p>
      </div>
    </header>
  )
}
