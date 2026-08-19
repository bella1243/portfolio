import {
  GraduationCap,
  Factory,
  Settings,
  Award,
  Zap,
  Gauge,
  BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { educationItems } from '../../data/education'

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Factory,
  Settings,
  Award,
  Zap,
  Gauge,
}

export default function Education() {
  const education = educationItems.filter((item) => item.type === 'education')
  const certifications = educationItems.filter((item) => item.type === 'certification')

  return (
    <section id="education" className="section-padding relative" aria-label="Education and certifications">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic background and professional qualifications"
          icon={BookOpen}
          animated={false}
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-amber-400" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item) => {
                const Icon = iconMap[item.icon] || GraduationCap
                return (
                  <div
                    key={item.title}
                    className="glass-card flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200">{item.title}</h4>
                      {item.institution && (
                        <p className="text-sm text-gray-500 mt-1">{item.institution}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-400" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
              {certifications.map((item) => {
                const Icon = iconMap[item.icon] || Award
                return (
                  <div
                    key={item.title}
                    className="glass-card text-center"
                  >
                    <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                    <h4 className="font-medium text-sm text-gray-300 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
