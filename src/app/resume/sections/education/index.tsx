import { SectionContainer } from '../../components/section-container'
import { SectionTitle } from '../../components/section-title'

export function Education() {
  return (
    <SectionContainer>
      <SectionTitle>Education</SectionTitle>

      <div className="space-y-3 print:space-y-2">
        <div>
          <h3 className="font-semibold text-gray-800 print:text-sm">
            부산가톨릭대학교
          </h3>

          <p className="text-gray-600 text-sm">컴퓨터공학과 학사</p>

          <p className="text-gray-500 text-sm">2010.03 - 2017.02</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 text-lg">자격증</h3>

          <p className="text-gray-600 text-sm">정보처리기사</p>
        </div>
      </div>
    </SectionContainer>
  )
}
