export default async function SolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-white">
        {children}
      </main>
    </>
  )
}
