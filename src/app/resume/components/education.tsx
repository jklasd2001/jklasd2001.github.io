export function Education() {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 print:text-lg print:mb-3 border-b-2 border-gray-400 pb-2">
        Education
      </h2>
      <div className="space-y-3 print:space-y-2">
        <div>
          <h3 className="font-semibold text-gray-800 print:text-sm">
            부산가톨릭대학교
          </h3>
          <p className="text-gray-600 text-sm print:text-xs">
            컴퓨터공학과 학사
          </p>
          <p className="text-gray-500 text-xs print:text-xs">
            2010.03 - 2017.02
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 print:text-sm">자격증</h3>
          <p className="text-gray-600 text-sm print:text-xs">정보처리기사</p>
        </div>
      </div>
    </section>
  )
}
