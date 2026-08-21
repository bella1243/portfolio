import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onAnimationComplete={() => {
        const el = document.getElementById('loading-screen')
        if (el) el.style.display = 'none'
      }}
      id="loading-screen"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#08080c] [.light_&]:bg-[#ece8e2]"
      role="status"
      aria-label="Loading"
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #b88960, #8a6240)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#08080c] [.light_&]:bg-[#ece8e2]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 font-display text-lg"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}
