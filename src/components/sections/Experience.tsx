import { Briefcase } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative" aria-label="Experience">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Professional internships and hands-on industry experience"
          icon={Briefcase}
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-amber-500/50 to-amber-500/50" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`relative flex items-center gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#0a0a0f] [.light_&]:border-slate-200 z-10 shadow-lg shadow-amber-500/50" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-gray-100 mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-amber-400 text-sm font-medium mb-4">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
