const CoupleInfoSection = () => {
  return (
    <section className="px-6 py-20 bg-[#ebf1e0]">
      {/* 신랑 섹션 */}
      <div className="text-center mb-8">
        {/* 신랑 라벨 */}
        <div className="inline-block bg-green-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          신랑
        </div>

        {/* 신랑 이름 */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">영수</h2>
          <p className="text-sm text-gray-500">YOUNG SU</p>
        </div>

        {/* 신랑 부모님 */}
        <div className="mb-2">
          <p className="text-gray-800">김종건 | 신혜련</p>
        </div>

        {/* 관계 */}
        <p className="text-sm text-gray-500">아들</p>
      </div>

      {/* 구분선 */}
      <div className="w-full h-px bg-gray-300 mb-8" />

      {/* 신부 섹션 */}
      <div className="text-center mb-8">
        {/* 신부 라벨 */}
        <div className="inline-block bg-green-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          신부
        </div>

        {/* 신부 이름 */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">현아</h2>
          <p className="text-sm text-gray-500">SUYEON</p>
        </div>

        {/* 신부 부모님 */}
        <div className="mb-2">
          <p className="text-gray-800">박영희 | 김영희</p>
        </div>

        {/* 관계 */}
        <p className="text-sm text-gray-500">딸</p>
      </div>

      {/* 연락하기 버튼 */}
      <button
        type="button"
        className="w-full bg-green-400 text-white py-4 px-6 rounded-lg flex items-center justify-between hover:bg-green-500 transition-colors"
      >
        <span className="font-medium">축하 연락하기</span>
        <svg
          role="img"
          aria-label="Arrow right"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  )
}

export default CoupleInfoSection
