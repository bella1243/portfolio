import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react'
import { profile } from '../../data/profile'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center section-padding pt-24 sm:pt-28 pb-12 sm:pb-16"
      aria-label="Hero section"
    >
      <div className="max-w-6xl mx-auto w-full min-w-0">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-5">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-medium mb-3 sm:mb-4 max-w-lg leading-snug">
              Electrical & Computer Engineer building intelligent systems.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-7 sm:mb-9 max-w-md">
              {profile.intro}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end min-w-0"
          >
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px]">
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-40 blur-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 40%, rgba(245,158,11,0.35), transparent 65%)',
                }}
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30">
                <img
                  src={profile.profileImage}
                  alt={`${profile.name} — professional portrait`}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/55 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
