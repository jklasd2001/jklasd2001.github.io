interface StackItemProps {
  title: string
  description: string
}

export default function StackItem({ title, description }: StackItemProps) {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>

      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
