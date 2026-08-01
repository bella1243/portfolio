import { motion, useScroll, useTransform } from 'framer-motion'
import { FileText, Mail, FolderOpen } from 'lucide-react'
import { profile } from '../../data/profile'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32"
      aria-label="Hero section"
    >
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-cyan-400/90 font-medium mb-6 leading-relaxed">
              {profile.title}
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {profile.intro}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
              <a href="#projects" className="btn-secondary">
                <FolderOpen className="w-5 h-5" />
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl glass overflow-hidden">
                <motion.img
                  src={profile.profileImage}
                  alt={`${profile.name} — professional portrait`}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 via-transparent to-cyan-500/10 pointer-events-none [.light_&]:from-slate-900/25 [.light_&]:to-cyan-500/5" />
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full glass text-xs text-cyan-400">
                  Available for opportunities
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-gray-600 [.light_&]:border-gray-500 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
