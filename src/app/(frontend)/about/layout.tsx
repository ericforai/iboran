export default async function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-grow">{children}</main>
    </>
  )
}
