export function PrintMetadata() {
  return (
    <div className="print:block hidden">
      <h1 className="text-2xl font-bold text-center mb-4">김영수 - 이력서</h1>
      <div className="text-center text-gray-600 mb-6">
        {new Date().toLocaleDateString('ko-KR')} 기준
      </div>
    </div>
  )
}
