import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative p-2.5 rounded-xl glass hover:border-cyan-500/30 transition-colors"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-cyan-400" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500" />
        )}
      </motion.div>
    </motion.button>
  )
}
