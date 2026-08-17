import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { profile } from '../../data/profile'

const buttonClass =
  'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full glass border border-amber-500/30 text-sm font-medium text-gray-100 shadow-lg shadow-amber-500/20 hover:border-amber-400/50 hover:bg-amber-500/10 transition-colors'

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="fixed top-24 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
          aria-label="Quick contact"
        >
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href={`mailto:${profile.email}`}
              className={buttonClass}
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.04, 1],
                boxShadow: [
                  '0 10px 25px rgba(6, 182, 212, 0.15)',
                  '0 14px 32px rgba(6, 182, 212, 0.35)',
                  '0 10px 25px rgba(6, 182, 212, 0.15)',
                ],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                animate={{ rotate: [0, -12, 12, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Mail className="w-4 h-4 text-amber-400" aria-hidden />
              </motion.span>
              Email me
            </motion.a>

            <motion.a
              href={`tel:${profile.phone}`}
              className={buttonClass}
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.04, 1],
                boxShadow: [
                  '0 10px 25px rgba(6, 182, 212, 0.15)',
                  '0 14px 32px rgba(6, 182, 212, 0.35)',
                  '0 10px 25px rgba(6, 182, 212, 0.15)',
                ],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.35,
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
              >
                <Phone className="w-4 h-4 text-amber-400" aria-hidden />
              </motion.span>
              Call me
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
