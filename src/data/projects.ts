export interface Project {
  title: string
  description: string
  features: string[]
  technologies: string[]
  gradient: string
  icon: string
}

export const projects: Project[] = [
  {
    title: 'Smart Vehicle Safety System',
    description:
      'An IoT-based vehicle safety system that monitors driver safety and provides real-time tracking.',
    features: [
      'Detects alcohol levels using sensors',
      'Prevents vehicle startup when alcohol is detected',
      'Provides accident detection and GPS tracking',
      'Displays information on a web dashboard ',
      'Analyzes the information using AI'
    ],
    technologies: ['ESP32', 'Firebase', 'HTML', 'CSS', 'JavaScript', 'IoT Sensors'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    icon: 'Car',
  },
  {
    title: 'Millto',
    description:
      'An AI-powered educational platform that uses generative AI to help students learn interactively.',
    features: [
      'Interactive AI-powered learning experiences',
      'Personalized study assistance',
      'Modern educational technology interface',
    ],
    technologies: ['Generative AI', 'JavaScript', 'Web Development', 'AI'],
    gradient: 'from-purple-500/20 to-pink-600/20',
    icon: 'GraduationCap',
  },
  {
    title: 'Bank Networking System',
    description:
      'Designed a comprehensive network infrastructure model for a banking institution.',
    features: [
      'Multiple branches network architecture',
      'Departmental networks design',
      'ATM systems integration',
      'Secure communication architecture',
    ],
    technologies: ['Networking', 'System Design', 'Security', 'Infrastructure'],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    icon: 'Building2',
  },
 
]
