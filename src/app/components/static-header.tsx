'use client'

import Link from 'next/link'
import { ThemeSwitcher } from './theme-switcher'

export default function StaticHeader() {
  return (
    <header className="w-full py-4 px-6 bg-card border-b border-color shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Journey
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/dashboard" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
          
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}