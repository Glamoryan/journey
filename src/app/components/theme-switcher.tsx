'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-2">
      <button className={`cursor-pointer p-2 rounded ${ theme === 'dark' ? 'bg-gray-500' : ''}`} onClick={() => setTheme('dark')}>Dark Theme</button>
      <button className={`cursor-pointer p-2 rounded ${ theme === 'light' ? 'bg-gray-500' : ''}`} onClick={() => setTheme('light')}>Light Theme</button>
      <button className={`cursor-pointer p-2 rounded ${ theme === 'system' ? 'bg-gray-500' : ''}`} onClick={() => setTheme('system')}>System Theme</button>
    </div>
  )
}