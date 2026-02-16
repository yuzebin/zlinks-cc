import { useState, useEffect, useCallback } from 'react'

const themes = [
  'dark', 'light', 'ocean', 'forest', 'sunset', 'aurora', 'mono',
  'cherry', 'lavender', 'amber', 'emerald', 'sky', 'rose', 'midnight'
]

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('preferred-theme') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('preferred-theme', theme)
  }, [theme])

  const setThemeValue = useCallback((newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme)
    }
  }, [])

  return { theme, setTheme: setThemeValue, themes }
}
