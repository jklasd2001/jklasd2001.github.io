import { cn } from 'src/lib/utils'

export default function SectionTitle({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-center text-4xl font-sometimes-times text-black-default tracking-wider font-light',
        className,
      )}
    >
      {title}
    </p>
  )
}
