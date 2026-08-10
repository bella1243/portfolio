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
      'An IoT-based vehicle safety system that monitors driver safety, detects accidents, and provides real-time vehicle tracking.',
    features: [
      'Detects alcohol levels using sensors',
      'Prevents vehicle startup when alcohol is detected',
      'Provides accident detection and GPS tracking',
      'Displays vehicle information on a web dashboard',
      'Analyzes collected information using AI',
    ],
    technologies: [
      'ESP32',
      'Firebase',
      'HTML',
      'CSS',
      'JavaScript',
      'IoT',
      'Sensors',
      'GPS',
    ],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    icon: 'Car',
  },

  {
    title: 'Millto',
    description:
      'An AI-powered educational platform that uses generative AI to help students learn interactively and access personalized study assistance.',
    features: [
      'Interactive AI-powered learning experiences',
      'Personalized study assistance',
      'Modern educational technology interface',
      'AI-assisted educational content',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Django',
      'REST API',
    ],
    gradient: 'from-purple-500/20 to-pink-600/20',
    icon: 'GraduationCap',
  },

  {
    title: 'Bank Networking System',
    description:
      'Designed a comprehensive network infrastructure model for a banking institution, focusing on secure communication and reliable connectivity.',
    features: [
      'Multiple branch network architecture',
      'Departmental network design',
      'ATM systems integration',
      'Secure communication architecture',
      'Network infrastructure planning',
    ],
    technologies: [
      'Networking',
      'System Design',
      'Network Security',
      'Infrastructure',
      'Routing',
      'Switching',
    ],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    icon: 'Building2',
  },

  {
    title: 'Instagram & YouTube Clone',
    description:
      'Web applications inspired by Instagram and YouTube, built to strengthen modern frontend development and user interface skills.',
    features: [
      'Responsive interfaces',
      'Interactive components',
      'Content presentation',
      'Video and media presentation',
      'Modern frontend architecture',
    ],
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    gradient: 'from-sky-500/20 to-indigo-600/20',
    icon: 'Instagram',
  },

  {
    title: 'Li-Fi Voice Communication System',
    description:
      'A Li-Fi communication system that transmits voice signals through visible light for wireless audio communication.',
    features: [
      'Voice transmission',
      'Visible light communication',
      'Audio signal processing',
      'Transmitter and receiver design',
      'Wireless optical communication',
    ],
    technologies: [
      'C++',
      'Arduino',
      'Li-Fi',
      'Electronics',
      'Communication Systems',
    ],
    gradient: 'from-violet-500/20 to-indigo-600/20',
    icon: 'Lightbulb',
  },

  {
    title: 'Car Rental Management System',
    description:
      'A management system for handling vehicles, customers, reservations, rentals, and vehicle availability efficiently.',
    features: [
      'Vehicle management',
      'Customer management',
      'Rental management',
      'Reservation management',
      'Vehicle availability tracking',
    ],
    technologies: [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'SQL',
      'Object-Oriented Programming',
    ],
    gradient: 'from-orange-500/20 to-red-600/20',
    icon: 'Car',
  },

  {
    title: 'Scheduling & Task Management Application',
    description:
      'A productivity application for organizing tasks, managing deadlines, prioritizing work, and tracking progress efficiently.',
    features: [
      'Task management',
      'Deadline scheduling',
      'Task prioritization',
      'Progress tracking',
      'Productivity dashboard',
    ],
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Firebase',
      'REST APIs',
    ],
    gradient: 'from-blue-500/20 to-cyan-600/20',
    icon: 'CalendarCheck2',
  },

  {
    title: 'Web-Based Snake Game',
    description:
      'An interactive browser-based Snake game featuring keyboard controls, scoring, collision detection, and dynamic gameplay.',
    features: [
      'Keyboard controls',
      'Scoring system',
      'Game-state management',
      'Collision detection',
      'Dynamic gameplay',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'DOM Manipulation',
      'Game Logic',
    ],
    gradient: 'from-green-500/20 to-lime-600/20',
    icon: 'Gamepad2',
  },

  {
    title: 'Electric Bill Payment System',
    description:
      'A desktop application for managing electricity bills, customer payments, and account information efficiently.',
    features: [
      'Customer management',
      'Bill calculation',
      'Payment processing',
      'Account management',
      'Database management',
    ],
    technologies: [
      'C++',
      'C++ GUI',
      'Object-Oriented Programming',
      'Database Management',
    ],
    gradient: 'from-amber-500/20 to-orange-600/20',
    icon: 'Zap',
  },
]