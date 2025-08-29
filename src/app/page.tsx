import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-pretendard">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">김영수</h1>
          <p className="text-xl text-gray-600 mb-12">프론트엔드 개발자</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resume"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              이력서 보기
            </Link>
            <Link
              href="/blog"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              블로그 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
