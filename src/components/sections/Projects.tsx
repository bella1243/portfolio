import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FolderKanban,
  Car,
  GraduationCap,
  Building2,
  Instagram,
  Lightbulb,
  Gamepad2,
  Zap,
  CalendarCheck2,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import ProjectModal from '../ui/ProjectModal'
import { projects, type Project } from '../../data/projects'

const iconMap: Record<string, LucideIcon> = {
  Car,
  GraduationCap,
  Building2,
  Instagram,
  Lightbulb,
  Gamepad2,
  Zap,
  CalendarCheck2,
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  const selectedIcon = selected
    ? iconMap[selected.icon] || FolderKanban
    : FolderKanban

  return (
    <section id="projects" className="section-padding relative" aria-label="Projects">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Projects" subtitle="" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects
            .filter((project) => !project.hidden)
            .map((project, i) => {
              const Icon = iconMap[project.icon] || FolderKanban
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <ProjectCard
                    project={project}
                    Icon={Icon}
                    onOpenDetails={() => setSelected(project)}
                  />
                </motion.div>
              )
            })}
        </div>
      </div>

      <ProjectModal
        project={selected}
        Icon={selectedIcon}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
