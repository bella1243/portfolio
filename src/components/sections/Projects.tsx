import { motion } from 'framer-motion'
import { ExternalLink, FolderKanban, Car, GraduationCap, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/projects'

const iconMap: Record<string, LucideIcon> = {
  Car,
  GraduationCap,
  Building2,
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative" aria-label="Projects">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Innovative solutions spanning IoT, AI, and network infrastructure"
          icon={FolderKanban}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || FolderKanban
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card group overflow-hidden flex flex-col"
              >
                <div
                  className={`relative h-48 -mx-6 -mt-6 mb-6 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6,182,212,0.3) 1px, transparent 0)`,
                        backgroundSize: '24px 24px',
                      }}
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                  >
                    <Icon className="w-10 h-10 text-cyan-400" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-sm text-cyan-400 flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <ul className="space-y-1.5 mb-6 flex-grow">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-cyan-500 mt-0.5">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
