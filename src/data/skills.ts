export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'C++',
      'C',
    ],
  },
  {
    title: 'Web Development',
    icon: 'Globe',
    skills: [
      'HTML',
      'CSS',
      'React',
      'JavaScript',
      'Firebase',
      'Responsive Design',
    ],
  },
  {
    title: 'Networking',
    icon: 'Network',
    skills: [
      'Computer Networking',
      'Network Infrastructure',
      'Routing & Switching',
      'TCP/IP',
      'Troubleshooting',
      'Systems Integration',
    ],
  },
  {
    title: 'Cybersecurity',
    icon: 'Shield',
    skills: [
      'Network Security',
      'Threat Analysis',
      'Security Best Practices',
      'Risk Assessment',
      'Access Control',
    ],
  },
  {
    title: 'AI & Emerging Tech',
    icon: 'Brain',
    skills: [
      'Generative AI',
      'Prompt Engineering',
      'AI Applications',
      'Automation',
      'Machine Learning Basics',
    ],
  },
  {
    title: 'Electrical Engineering',
    icon: 'Zap',
    skills: [
      'Circuit Analysis',
      'Communication Systems',
      'Signal Processing',
      'Digital Systems',
      'Electronics Design',
    ],
  },
]
