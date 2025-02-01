import { useContext } from 'react'

import { Moon } from 'lucide-react'
import { Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { ThemeProvideContext } from '@/components/theme-provider'

export function Navbar() {
  const { theme, setTheme } = useContext(ThemeProvideContext)

  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="h-16 border-b-2">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link
          to="/"
          className="bg-primary p-0.5 font-extrabold text-background md:text-lg"
        >
          Github Profile Readme Generator
        </Link>
        <Button size="icon" variant="outline" onClick={handleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />}
        </Button>
      </MaxWidthWrapper>
    </header>
  )
}
