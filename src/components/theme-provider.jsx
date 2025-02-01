import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeProvideContext = createContext('light')

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeProvideContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProvideContext.Provider>
  )
}
