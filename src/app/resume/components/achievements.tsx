export function Achievements() {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 print:text-2xl print:mb-3 border-b-2 border-gray-400 pb-2">
        주요 성과
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
        <div className="p-4 bg-blue-100 rounded-lg print:bg-transparent print:p-0">
          <h3 className="font-semibold text-blue-900 mb-2 print:text-base">
            🚀 프레임워크 마이그레이션
          </h3>
          <ul className="text-base text-blue-800 space-y-1 print:text-sm">
            <li>• JSP → Next.js 마이그레이션으로 SEO 성능 60% 향상</li>
            <li>• GraphQL 기반 현대적인 API 아키텍처 구축</li>
          </ul>
        </div>

        <div className="p-4 bg-green-100 rounded-lg print:bg-transparent print:p-0">
          <h3 className="font-semibold text-green-900 mb-2 print:text-base">
            ⚡ 성능 최적화
          </h3>
          <ul className="text-base text-green-800 space-y-1 print:text-sm">
            <li>• 코드 스플리팅으로 로딩 속도 4초 → 1초 개선</li>
            <li>• 번들 최적화로 전체 로딩 속도 60% 향상</li>
          </ul>
        </div>

        <div className="p-4 bg-purple-100 rounded-lg print:bg-transparent print:p-0">
          <h3 className="font-semibold text-purple-900 mb-2 print:text-base">
            🛠 개발 효율성
          </h3>
          <ul className="text-base text-purple-800 space-y-1 print:text-sm">
            <li>• TypeScript 도입으로 런타임 에러 90% 이상 감소</li>
            <li>• 디자인 시스템 구축으로 개발 속도 40% 향상</li>
          </ul>
        </div>

        <div className="p-4 bg-orange-100 rounded-lg print:bg-transparent print:p-0">
          <h3 className="font-semibold text-orange-900 mb-2 print:text-base">
            📱 크로스 플랫폼
          </h3>
          <ul className="text-base text-orange-800 space-y-1 print:text-sm">
            <li>• 웹부터 모바일까지 다양한 플랫폼 개발 경험</li>
            <li>• React Native를 활용한 네이티브 앱 연동</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
