import type { ReactNode } from 'react'

interface ProjectItemProps {
  title: ReactNode
  description: string
  skills: string[]
  improvements?: string[]
  period: string
}

export default function ProjectItem({
  title,
  description,
  skills,
  improvements = [],
  period,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col justify-between items-start md:flex-row md:items-center">
        <h4 className="font-semibold text-gray-800 text-lg print:text-base">
          {title}
        </h4>

        <span className="text-sm text-gray-400 print:text-xs">{period}</span>
      </div>

      <p className="text-gray-400 text-base italic print:text-sm">
        {description}
      </p>

      <ul className="text-gray-600 text-base print:text-sm space-y-1 ml-4">
        {improvements.map((improvement) => (
          <li key={improvement}>• {improvement}</li>
        ))}
      </ul>

      <p className="text-gray-500 text-sm print:text-xs">{skills.join(', ')}</p>
    </div>
  )
}
