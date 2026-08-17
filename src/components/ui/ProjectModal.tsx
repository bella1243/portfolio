import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Wine,
  AlertTriangle,
  MapPin,
  Bell,
  Database,
  LayoutDashboard,
  Sparkles,
  UserRound,
  MonitorSmartphone,
  BookOpen,
  Server,
  MessageCircleQuestion,
  Network,
  Building2,
  CreditCard,
  ShieldCheck,
  Waypoints,
  ServerCog,
  Smartphone,
  MousePointerClick,
  Images,
  Clapperboard,
  Blocks,
  Code2,
  Mic,
  Sun,
  AudioWaveform,
  Radio,
  Antenna,
  Wifi,
  Car,
  Users,
  KeyRound,
  CalendarRange,
  CircleCheck,
  ListTodo,
  CalendarClock,
  Flag,
  ChartNoAxesColumn,
  Cloud,
  Keyboard,
  Trophy,
  Play,
  Bomb,
  Gamepad2,
  Calculator,
  Wallet,
  FolderOpen,
  AppWindow,
  Star,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { resolveProjectImages, type Project } from '../../data/projects'
import ProjectImageStack from './ProjectImageStack'

const featureIconMap: Record<string, LucideIcon> = {
  Wine,
  AlertTriangle,
  MapPin,
  Bell,
  Database,
  LayoutDashboard,
  Sparkles,
  UserRound,
  MonitorSmartphone,
  BookOpen,
  Server,
  MessageCircleQuestion,
  Network,
  Building2,
  CreditCard,
  ShieldCheck,
  Waypoints,
  ServerCog,
  Smartphone,
  MousePointerClick,
  Images,
  Clapperboard,
  Blocks,
  Code2,
  Mic,
  Sun,
  AudioWaveform,
  Radio,
  Antenna,
  Wifi,
  Car,
  Users,
  KeyRound,
  CalendarRange,
  CircleCheck,
  ListTodo,
  CalendarClock,
  Flag,
  ChartNoAxesColumn,
  Cloud,
  Keyboard,
  Trophy,
  Play,
  Bomb,
  Gamepad2,
  Calculator,
  Wallet,
  FolderOpen,
  AppWindow,
}

interface ProjectModalProps {
  project: Project | null
  Icon: LucideIcon
  onClose: () => void
}

export default function ProjectModal({ project, Icon, onClose }: ProjectModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const images = project ? resolveProjectImages(project) : []

  useEffect(() => {
    if (!project) {
      setLightboxIndex(null)
      return
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') {
          setLightboxIndex(null)
          return
        }
        if (e.key === 'ArrowRight' && images.length > 1) {
          setLightboxIndex((i) => ((i ?? 0) + 1) % images.length)
          return
        }
        if (e.key === 'ArrowLeft' && images.length > 1) {
          setLightboxIndex((i) => ((i ?? 0) - 1 + images.length) % images.length)
          return
        }
      }

      if (e.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose, lightboxIndex, images.length])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 h-full overflow-y-auto project-detail-page"
            style={{ ['--project-accent' as string]: project.accent }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
              <div
                className="absolute top-[-12%] right-[-8%] h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${project.accent}60, transparent 70%)`,
                }}
              />
            </div>

            <header className="sticky top-0 z-30 px-4 sm:px-8 lg:px-12 py-4 project-detail-topbar backdrop-blur-xl">
              <div className="max-w-6xl mx-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-gray-200 hover:bg-white/10 transition-colors"
                  aria-label="Back to projects"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back</span>
                </button>
              </div>
            </header>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pb-24">
              {/* Hero: title left, photos right */}
              <section className="pt-4 pb-16 lg:pb-20">
                <div
                  className={`grid gap-12 lg:gap-10 items-center ${
                    !project.hideImages ? 'lg:grid-cols-2' : ''
                  }`}
                >
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-amber-400 mb-5">
                      Project
                    </p>
                    <h1
                      id="project-modal-title"
                      className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08] mb-6"
                    >
                      {project.title}
                    </h1>
                    <p
                      className={`text-gray-400 text-base sm:text-lg leading-relaxed max-w-md ${
                        !project.hideLiveDemo ? 'mb-9' : ''
                      }`}
                    >
                      {project.tagline}
                    </p>
                    {!project.hideLiveDemo &&
                      (project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-detail-cta group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                        >
                          Live Demo
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2.5 rounded-full bg-white/15 text-gray-400 px-6 py-3 text-sm font-semibold">
                          Live Demo
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      ))}
                  </div>

                  {!project.hideImages && (
                    <div className="lg:justify-self-end w-full">
                      <ProjectImageStack
                        images={images}
                        title={project.title}
                        accent={project.accent}
                        gradient={project.gradient}
                        Icon={Icon}
                        onOpenLightbox={setLightboxIndex}
                      />
                    </div>
                  )}
                </div>
              </section>

              {/* Overview */}
              <section className="pb-14 max-w-2xl">
                <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-amber-400 mb-5">
                  Overview
                </h2>
                <div className="space-y-5">
                  {project.overview.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-gray-300 text-base sm:text-[1.05rem] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Features */}
              {project.features.length > 0 && (
                <section>
                  <div className="flex items-end justify-between gap-4 mb-8">
                    <h2 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-amber-400">
                      Key Features
                    </h2>
                    <p className="hidden sm:block text-sm text-gray-500">
                      What makes this project work
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.features.map((feature, i) => {
                      const FeatureIcon = featureIconMap[feature.icon] || Star
                      return (
                        <motion.article
                          key={feature.title}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ duration: 0.35, delay: i * 0.04 }}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 backdrop-blur-sm transition-colors hover:border-amber-500/25 hover:bg-white/[0.06]"
                        >
                          <div
                            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-40"
                            style={{ backgroundColor: project.accent }}
                            aria-hidden
                          />
                          <div
                            className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                            style={{ backgroundColor: `${project.accent}22` }}
                          >
                            <FeatureIcon className="h-5 w-5 text-amber-400" />
                          </div>
                          <h3 className="font-display text-base font-semibold text-gray-100 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {feature.description}
                          </p>
                        </motion.article>
                      )
                    })}
                  </div>
                </section>
              )}
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxIndex !== null && images[lightboxIndex] && (
              <motion.div
                className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  type="button"
                  className="absolute inset-0 bg-black/92 backdrop-blur-md"
                  aria-label="Close full photo"
                  onClick={() => setLightboxIndex(null)}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                  className="relative z-10 flex max-h-full w-full max-w-6xl flex-col items-center"
                >
                  <div className="mb-4 flex w-full items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(null)}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
                    >
                      <X className="w-4 h-4" />
                      Close
                    </button>
                    <p className="text-sm text-gray-400 tabular-nums">
                      {lightboxIndex + 1} / {images.length}
                    </p>
                  </div>

                  <div className="relative flex w-full items-center justify-center gap-3">
                    {images.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxIndex(
                            (lightboxIndex - 1 + images.length) % images.length
                          )
                        }
                        className="absolute left-0 z-10 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/15"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    )}

                    <img
                      src={images[lightboxIndex]}
                      alt={`${project.title} full view ${lightboxIndex + 1}`}
                      className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                    />

                    {images.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          setLightboxIndex((lightboxIndex + 1) % images.length)
                        }
                        className="absolute right-0 z-10 hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/15"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
