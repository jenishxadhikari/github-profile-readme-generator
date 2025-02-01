import { useContext } from 'react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ThemeProvideContext } from '@/components/theme-provider'

export default function App() {
  const { theme } = useContext(ThemeProvideContext)

  return (
    <div className={`flex min-h-screen flex-col ${theme}`}>
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center gap-3 py-5">
        Body
      </main>
      <Footer />
    </div>
  )
}
