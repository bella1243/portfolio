import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile, stats } from '../../data/profile'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding relative" aria-label="About me">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-20"
        >
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-8 sm:mb-10">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-end">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug text-gray-100">
              Engineer focused on{' '}
              <span className="text-amber-400">intelligent systems</span>
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-md lg:pb-1">
              Curious builder at the intersection of hardware, software, and AI always shipping things that matter in the real world.
            </p>
          </div>
        </motion.div>

        {/* Bio + goals */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">
              Biography
            </p>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-display">
              {profile.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative"
          >
            <div
              className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/15 to-transparent hidden lg:block"
              aria-hidden
            />
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4 lg:pl-6">
              Direction
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed lg:pl-6">
              {profile.careerGoals}
            </p>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16 md:mb-24 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-10 sm:py-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center sm:text-left ${
                  i > 0 ? 'sm:border-l sm:border-white/10 sm:pl-8' : ''
                }`}
              >
                <div className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-2 tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-500 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400 mb-2">
                Focus areas
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                What I care about
              </h3>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-amber-400 transition-colors"
            >
              See the work
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {profile.interests.map((interest, i) => (
              <motion.li
                key={interest}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-amber-500/35 hover:text-amber-300 hover:bg-amber-500/5">
                  {interest}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
