export default function SectionContent({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex-1 space-y-4 print:space-y-3">{children}</div>
}
