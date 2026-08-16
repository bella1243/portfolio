import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  Icon: LucideIcon
  onOpenDetails: () => void
}

export default function ProjectCard({ project, Icon, onOpenDetails }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`project-flip group h-64 sm:h-72 ${flipped ? 'is-flipped' : ''}`}
      style={{ ['--project-accent' as string]: project.accent }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((prev) => !prev)}
      role="group"
      aria-label={project.title}
    >
      <div className="project-flip-inner">
        {/* Front — title + icon only */}
        <div className="project-face project-face-front">
          <div className="project-blob" aria-hidden />
          <div className="relative z-10 flex flex-col items-center text-center px-5">
            <div className="flex items-center justify-center gap-2.5">
              <span className="project-accent-chip flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5 project-card-icon" />
              </span>
              <h3 className="font-display text-lg sm:text-xl font-semibold project-card-title leading-snug text-left">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back — short description + centered arrow */}
        <div className="project-face project-face-back">
          <div className="project-blob" aria-hidden />
          <div className="relative z-10 flex h-full flex-col items-center justify-between p-6 text-center">
            <div>
              <h3 className="font-display text-base font-semibold project-card-title mb-3">
                {project.title}
              </h3>
              <p className="text-sm project-card-desc leading-relaxed line-clamp-4">
                {project.description}
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onOpenDetails()
              }}
              aria-label={`Open details for ${project.title}`}
              className="project-accent-btn inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
            >
              <ArrowRight className="h-7 w-7 project-card-arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
