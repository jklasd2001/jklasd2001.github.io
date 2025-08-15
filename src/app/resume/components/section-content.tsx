export default function SectionContent({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex-1 space-y-6 print:space-y-4">{children}</div>
}
