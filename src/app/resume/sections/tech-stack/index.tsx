import { SectionContainer } from '../../components/section-container'
import { SectionTitle } from '../../components/section-title'
import StackItem from './stack-item'

export function TechStack() {
  return (
    <SectionContainer>
      <SectionTitle>Tech Stack</SectionTitle>

      <div className="space-y-4 print:space-y-3">
        <StackItem
          title="코어"
          description="TypeScript, React, Next.js, React Native"
        />

        <StackItem title="스타일링" description="Panda CSS, Tailwind CSS, Emotion" />

        <StackItem title="상태 관리" description="Zustand" />

        <StackItem title="빌드" description="Vite, Turbopack" />

        <StackItem title="패키지 매니저" description="Bun" />

        <StackItem title="CI/CD" description="Github Actions, AWS Amplify" />
      </div>
    </SectionContainer>
  )
}
