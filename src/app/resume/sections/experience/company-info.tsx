import { cn } from 'src/lib/utils'

interface CompanyInfoProps {
  name: string
  period: string
  className?: string
}

export function CompanyInfo({ name, period, className }: CompanyInfoProps) {
  return (
    <div className={cn('flex flex-col gap-2 col-span-1', className)}>
      <h3 className="font-bold text-gray-900 text-xl print:text-base">
        {name}
      </h3>

      <p className="text-sm text-gray-600 print:text-xs">{period}</p>
    </div>
  )
}
