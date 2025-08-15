export function PageHeader({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <header className="mb-6">
      {kicker && <p className="text-sm text-slate-600 mb-1">{kicker}</p>}
      <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
    </header>
  )
}