import type { JSX, ReactNode } from 'react'

interface RowProps {
  icon: JSX.Element
  title: string
  children: ReactNode
}

const Row = ({ icon, title, children }: RowProps) => {
  return (
    <div className="flex flex-col border-b border-wedding-green pb-6 gap-6 last-of-type:border-b-0 last-of-type:pb-0">
      <div className="flex items-center gap-2 text-wedding-green">
        {icon}

        <span className="font-semibold text-sm">{title}</span>
      </div>

      {children}
    </div>
  )
}

export default Row
