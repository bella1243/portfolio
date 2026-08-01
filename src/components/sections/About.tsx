import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, Target, Heart } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { profile, stats } from '../../data/profile'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * value)
      setCount(start)
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
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Engineer, innovator, and lifelong learner passionate about technology"
          icon={User}
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              Professional Biography
            </h3>
            <p className="text-gray-400 leading-relaxed">{profile.bio}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              Career Goals
            </h3>
            <p className="text-gray-400 leading-relaxed">{profile.careerGoals}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-16"
        >
          <h3 className="font-display text-xl font-semibold mb-6 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-cyan-400" />
            Personal Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {profile.interests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.5)' }}
                className="px-4 py-2 rounded-full glass text-sm text-gray-300 border border-white/10 cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card text-center group"
            >
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
