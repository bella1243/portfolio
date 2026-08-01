export interface EducationItem {
  title: string
  institution?: string
  type: 'education' | 'certification'
  icon: string
}

export const educationItems: EducationItem[] = [
  {
    title: 'Electrical and Computer Engineering (Communication Stream)',
    institution: 'University',
    type: 'education',
    icon: 'GraduationCap',
  },
  {
    title: 'Industrial Automation Certifications',
    type: 'certification',
    icon: 'Factory',
  },
  {
    title: 'PLC Qualifications',
    type: 'certification',
    icon: 'Settings',
  },
  {
    title: 'Siemens Certifications',
    type: 'certification',
    icon: 'Award',
  },
  {
    title: 'Applied Electronics',
    type: 'certification',
    icon: 'Zap',
  },
  {
    title: 'Pneumatic and Hydraulic Control',
    type: 'certification',
    icon: 'Gauge',
  },
]
