export function TechStack() {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 print:text-xl print:mb-3 border-b-2 border-gray-400 pb-2">
        Tech Stack
      </h2>
      <div className="space-y-4 print:space-y-3">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2 print:text-base">
            Core
          </h3>

          <p className="text-gray-700 text-base print:text-sm">
            TypeScript, React, Next.js, React Native
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2 print:text-base">
            Styling
          </h3>
          <p className="text-gray-700 text-base print:text-sm">
            Panda CSS, Tailwind CSS
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2 print:text-base">
            State
          </h3>

          <p className="text-gray-700 text-base print:text-sm">Zustand</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2 print:text-sm">
            Data & API
          </h3>

          <p className="text-gray-700 text-base print:text-sm">
            React Query, GraphQL, Apollo Client
          </p>
        </div>
      </div>
    </section>
  )
}
