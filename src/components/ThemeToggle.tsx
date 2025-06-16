import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 dark:bg-gray-800/90 border-2 border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300 group hover:scale-110"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        // Sun icon for switching to light mode
        <Sun className="w-7 h-7 text-yellow-500 group-hover:text-yellow-400 group-hover:rotate-45 transition-all duration-300" strokeWidth={2.5} />
      ) : (
        // Moon icon for switching to dark mode
        <Moon className="w-7 h-7 text-gray-700 group-hover:text-brand-orange-600 group-hover:-rotate-12 transition-all duration-300" strokeWidth={2.5} />
      )}
    </button>
  )
}

export default ThemeToggle 