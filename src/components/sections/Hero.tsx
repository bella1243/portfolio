import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react'
import { profile } from '../../data/profile'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 80])
  const opacity = useTransform(scrollY, [0, 280], [1, 0])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 pb-16"
      aria-label="Hero section"
    >
      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-emerald-400 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-medium mb-4 max-w-lg leading-snug">
              Electrical & Computer Engineer building intelligent systems.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-9 max-w-md">
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
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-40 blur-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 40%, rgba(34,211,238,0.35), transparent 65%)',
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
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
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
