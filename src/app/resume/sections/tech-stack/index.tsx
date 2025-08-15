import { SectionContainer } from '../../components/section-container'
import { SectionTitle } from '../../components/section-title'

export function TechStack() {
  return (
    <SectionContainer>
      <SectionTitle>Tech Stack</SectionTitle>

      <div className="space-y-4 print:space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 print:text-base">Core</h3>

          <p className="text-gray-600 text-sm print:text-sm">
            TypeScript, React, Next.js, React Native
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 print:text-base">
            Styling
          </h3>

          <p className="text-gray-600 text-sm print:text-sm">
            Panda CSS, Tailwind CSS
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 print:text-base">
            State Management
          </h3>

          <p className="text-gray-600 text-sm print:text-sm">Zustand</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
            Data & API
          </h3>

          <p className="text-gray-600 text-sm print:text-sm">
            React Query, GraphQL(Apollo Client)
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
