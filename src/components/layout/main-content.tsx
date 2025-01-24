// Main content wrapper
function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex-1 bg-gradient-to-b from-purple-900/20 to-black 
      p-4 md:ml-64 md:p-6">
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </main>
  )
}

export default MainContent 