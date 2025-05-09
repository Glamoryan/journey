'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'

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
    <div className="flex gap-2 items-center">
      <button 
        className={`cursor-pointer p-2 rounded-full transition-colors ${
          theme === 'dark' 
            ? 'bg-gray-700 text-gray-200' 
            : 'text-gray-600 hover:bg-gray-200'
        }`} 
        onClick={() => setTheme('dark')}
        aria-label="Dark Theme"
      >
        <Moon size={20} />
      </button>
      
      <button 
        className={`cursor-pointer p-2 rounded-full transition-colors ${
          theme === 'light' 
            ? 'bg-gray-200 text-gray-800' 
            : 'text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'
        }`} 
        onClick={() => setTheme('light')}
        aria-label="Light Theme"
      >
        <Sun size={20} />
      </button>
      
      <button 
        className={`cursor-pointer p-2 rounded-full transition-colors ${
          theme === 'system' 
            ? 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200' 
            : 'text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'
        }`} 
        onClick={() => setTheme('system')}
        aria-label="System Theme"
      >
        <Monitor size={20} />
      </button>
    </div>
  )
}