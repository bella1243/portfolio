export interface ProjectFeature {
  title: string
  description: string

  icon: string
}

export interface Project {
  title: string

  tagline: string
  description: string
 
  overview: string[]
  features: ProjectFeature[]
  technologies: string[]
  gradient: string
  accent: string
  icon: string
  role: string
  duration: string
  type: string
  status: string

  imageFiles?: string[]
  /** Skip auto-loaded /files photos for this project */
  hideImages?: boolean
  /** Hide the Live Demo button even if a URL exists */
  hideLiveDemo?: boolean
  /** Temporarily hide this project from the portfolio grid */
  hidden?: boolean
  liveUrl?: string
  githubUrl?: string
}

const imageModules = import.meta.glob('../../files/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function normalizeStem(value: string): string {
  return value.replace(/\.[^.]+$/, '').trim().toLowerCase()
}


export function resolveProjectImages(project: Project): string[] {
  if (project.hideImages) return []

  const titleStem = normalizeStem(project.title)
  const titleSlug = titleStem.replace(/\s+/g, '-')
  const titleUnderscore = titleStem.replace(/\s+/g, '_')
  const explicit = (project.imageFiles || [])
    .map(normalizeStem)
    .filter(Boolean)

  const matched: { order: number; url: string }[] = []

  for (const [path, url] of Object.entries(imageModules)) {
    const file = path.split('/').pop() || ''
    const name = normalizeStem(file)

    if (explicit.includes(name)) {
      matched.push({ order: explicit.indexOf(name), url })
      continue
    }

    const prefixes = [titleStem, titleSlug, titleUnderscore]
    for (const prefix of prefixes) {
      if (name === prefix) {
        matched.push({ order: 0, url })
        break
      }

      const numbered = name.match(
        new RegExp(`^${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[-_\\s]?(\\d+)$`)
      )
      if (numbered) {
        matched.push({ order: Number(numbered[1]), url })
        break
      }
    }
  }

  const unique = new Map<string, number>()
  for (const item of matched) {
    const prev = unique.get(item.url)
    if (prev === undefined || item.order < prev) unique.set(item.url, item.order)
  }

  return [...unique.entries()]
    .sort((a, b) => a[1] - b[1])
    .map(([url]) => url)
}

/** @deprecated Prefer resolveProjectImages — kept for single-image callers */
export function resolveProjectImage(project: Project): string | undefined {
  return resolveProjectImages(project)[0]
}

export const projects: Project[] = [
  {
    title: 'Smart Vehicle Safety System',
    tagline: 'Intelligent vehicle monitoring and accident detection system.',
    description:
      'An intelligent vehicle monitoring system designed to detect alcohol consumption and accidents while providing real-time vehicle information and emergency alerts.',
    overview: [
      'The Smart Vehicle System is designed to improve road safety by monitoring vehicle conditions and detecting dangerous situations.',
      'The system uses sensors attached to the vehicle to collect real-time vehicle information and detect critical events. This data is transmitted to a web-based monitoring dashboard, where users can assess the situation and take appropriate action, such as remotely shutting down the vehicle or contacting the authorities to help contain the situation.',
    ],
    features: [
      {
        title: 'Alcohol Detection',
        description: 'Detects alcohol before ignition',
        icon: 'Wine',
      },
      {
        title: 'Accident Detection',
        description: 'Detects sudden vehicle impact',
        icon: 'AlertTriangle',
      },
      {
        title: 'GPS Tracking',
        description: 'Provides real-time location',
        icon: 'MapPin',
      },
      {
        title: 'Live Alerts',
        description: 'Sends important events',
        icon: 'Bell',
      },
      {
        title: 'Admin',
        description: 'Adminstoring users and fleat',
        icon: 'Database',
      },
      {
        title: 'Dashboard',
        description: 'Visualizes vehicle data',
        icon: 'LayoutDashboard',
      },
    ],
    technologies: ['React', 'TypeScript', 'C++', 'ESP32', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accent: '#67E8F9',
    icon: 'Car',
    role: 'Full-Stack / Embedded Developer',
    duration: '2026',
    type: 'IoT / Web Application',
    status: 'Completed',
    liveUrl: 'https://smart-ride-seven.vercel.app',
  },

  {
    title: 'Millto',
    tagline: 'AI-powered personalized learning for modern students.',
    description:
      'An AI-powered educational platform that uses generative AI to help students learn interactively and access personalized study assistance.',
    overview: [
      'Millto is an educational platform that uses generative AI to deliver interactive learning experiences and personalized study support.',
      'Students can ask questions about the material they are studying, explore lessons, receive guided assistance, collaborate with their peers, and interact with an AI assistant to ask questions, clarify concepts, and support their learning.',
    ],
    features: [
      {
        title: 'AI Learning',
        description: 'Interactive AI-powered study sessions',
        icon: 'Sparkles',
      },
      {
        title: 'Personalization',
        description: 'Tailored assistance for each student',
        icon: 'UserRound',
      },
      {
        title: 'Easy UI',
        description: 'Clean educational interface',
        icon: 'MonitorSmartphone',
      },
      {
        title: 'Content',
        description: 'Generated study materials on demand',
        icon: 'BookOpen',
      },
      {
        title: 'Compution',
        description: 'Student can compute with ther paris',
        icon: 'Server',
      },
      {
        title: 'Q&A Help',
        description: 'Ask questions and get guided answers',
        icon: 'MessageCircleQuestion',
      },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django', 'REST API'],
    gradient: 'from-purple-500/20 to-pink-600/20',
    accent: '#F9A8D4',
    icon: 'GraduationCap',
    role: 'Full-Stack Developer',
    duration: '2025',
    type: 'EdTech / Web Application',
    status: 'Completed',
  },

  {
    title: 'Bank Networking System',
    tagline: 'Secure multi-branch banking network infrastructure.',
    description:
      'Designed a comprehensive network infrastructure model for a banking institution, focusing on secure communication and reliable connectivity.',
    overview: [
      'This project models a complete banking network spanning multiple branches, departments, and ATM endpoints.',
      'The design emphasizes secure communication, reliable routing and switching, and infrastructure planning suitable for financial institutions.',
    ],
    features: [
      {
        title: 'Multi-Branch',
        description: 'Architecture across bank locations',
        icon: 'Network',
      },
      {
        title: 'Departments',
        description: 'Segmented departmental LANs',
        icon: 'Building2',
      },
      {
        title: 'ATM Integration',
        description: 'Connects ATM systems securely',
        icon: 'CreditCard',
      },
      {
        title: 'Secure Comms',
        description: 'Protected inter-branch traffic',
        icon: 'ShieldCheck',
      },
      {
        title: 'Routing',
        description: 'Reliable path design',
        icon: 'Waypoints',
      },
      {
        title: 'Infrastructure',
        description: 'End-to-end network planning',
        icon: 'ServerCog',
      },
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
    accent: '#6EE7B7',
    icon: 'Building2',
    role: 'Network Design Engineer',
    duration: '2025',
    type: 'Network Infrastructure',
    status: 'Completed',
    hideLiveDemo: true,
  },

  {
    title: 'Instagram & YouTube Clone',
    tagline: 'Modern media interfaces built with React.',
    description:
      'Web applications inspired by Instagram and YouTube, built to strengthen modern frontend development and user interface skills.',
    overview: [
      'These clones focus on responsive layouts, media presentation, and interactive UI patterns inspired by major social platforms. Built with production-style component architecture, reusable components, and modern frontend practices, they demonstrate strong attention to UI/UX, state management, responsive design, API integration, and performance.',
    ],
    features: [
      {
        title: 'Responsive UI',
        description: 'Layouts that adapt to any screen',
        icon: 'Smartphone',
      },
      {
        title: 'Interactions',
        description: 'Engaging interactive components',
        icon: 'MousePointerClick',
      },
      {
        title: 'Content Feed',
        description: 'Clear content presentation',
        icon: 'Images',
      },
      {
        title: 'Video Media',
        description: 'Video and media viewing flows',
        icon: 'Clapperboard',
      },
      {
        title: 'Components',
        description: 'Reusable React architecture',
        icon: 'Blocks',
      },
      {
        title: 'TypeScript',
        description: 'Typed frontend development',
        icon: 'Code2',
      },
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-sky-500/20 to-indigo-600/20',
    accent: '#93C5FD',
    icon: 'Instagram',
    role: 'Frontend Developer',
    duration: '2025',
    type: 'Web Application',
    status: 'Completed',
    liveUrl: 'https://clone-rust-psi.vercel.app/',
  },

  {
    title: 'Li-Fi Voice Communication System',
    tagline: 'Wireless audio through visible light.',
    description:
      'A Li-Fi communication system that transmits voice signals through visible light for wireless audio communication.',
    overview: [
      'This prototype encodes voice into light signals and recovers audio on the receiver side.',
      'It explores optical wireless communication as an alternative to traditional RF-based audio links.',
    ],
    features: [
      {
        title: 'Voice Tx',
        description: 'Transmits voice over light',
        icon: 'Mic',
      },
      {
        title: 'Visible Light',
        description: 'Uses light as the carrier',
        icon: 'Sun',
      },
      {
        title: 'Audio DSP',
        description: 'Processes audio signals',
        icon: 'AudioWaveform',
      },
      {
        title: 'Transmitter',
        description: 'Optical transmitter design',
        icon: 'Radio',
      },
      {
        title: 'Receiver',
        description: 'Recovers audio at the endpoint',
        icon: 'Antenna',
      },
      {
        title: 'Wireless Link',
        description: 'RF-free optical communication',
        icon: 'Wifi',
      },
    ],
    technologies: ['C++', 'Arduino', 'Li-Fi', 'Electronics', 'Communication Systems'],
    gradient: 'from-violet-500/20 to-indigo-600/20',
    accent: '#C4B5FD',
    icon: 'Lightbulb',
    role: 'Embedded Systems Developer',
    duration: '2024',
    type: 'Hardware / Communication',
    status: 'Completed',
    hideImages: true,
    hideLiveDemo: true,
  },

  {
    title: 'Car Rental Management System',
    tagline: 'End-to-end fleet and reservation management.',
    description:
      'A management system for handling vehicles, customers, reservations, rentals, and vehicle availability efficiently.',
    overview: [
      'An object-oriented rental platform designed to manage fleet inventory, customer records, bookings, and vehicle availability in an organized and efficient way. The system allows operators to manage the complete rental lifecycle, from vehicle reservations and customer management to rental tracking and vehicle returns. It also helps monitor fleet availability and maintain accurate rental records, providing a structured solution for improving day-to-day rental operations.',
    ],
    features: [
      {
        title: 'Vehicles',
        description: 'Manage fleet inventory',
        icon: 'Car',
      },
      {
        title: 'Customers',
        description: 'Track customer records',
        icon: 'Users',
      },
      {
        title: 'Rentals',
        description: 'Handle active rental flows',
        icon: 'KeyRound',
      },
      {
        title: 'Reservations',
        description: 'Book vehicles in advance',
        icon: 'CalendarRange',
      },
      {
        title: 'Availability',
        description: 'See which cars are free',
        icon: 'CircleCheck',
      },
      {
        title: 'SQL Data',
        description: 'Persistent rental records',
        icon: 'Database',
      },
    ],
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Object-Oriented Programming'],
    gradient: 'from-orange-500/20 to-red-600/20',
    accent: '#FDBA74',
    icon: 'Car',
    role: 'Software Developer',
    duration: '2024',
    type: 'Desktop / Web System',
    status: 'Completed',
    hideLiveDemo: true,
  },

  {
    title: 'Scheduling & Task Management Application',
    tagline: 'Organize work, deadlines, and progress in one place.',
    description:
      'A productivity application for organizing tasks, managing deadlines, prioritizing work, and tracking progress efficiently.',
    overview: [
      'A full-stack productivity app with prioritized tasks, deadlines, and progress views.',
      'Firebase and REST APIs power persistence and real-time updates across the workflow.',
    ],
    features: [
      {
        title: 'Tasks',
        description: 'Create and organize work items',
        icon: 'ListTodo',
      },
      {
        title: 'Deadlines',
        description: 'Schedule due dates clearly',
        icon: 'CalendarClock',
      },
      {
        title: 'Priorities',
        description: 'Rank what matters most',
        icon: 'Flag',
      },
      {
        title: 'Progress',
        description: 'Track completion over time',
        icon: 'ChartNoAxesColumn',
      },
      {
        title: 'Dashboard',
        description: 'See productivity at a glance',
        icon: 'LayoutDashboard',
      },
      {
        title: 'Firebase',
        description: 'Real-time synced data',
        icon: 'Cloud',
      },
    ],
    technologies: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Firebase', 'REST APIs'],
    gradient: 'from-blue-500/20 to-cyan-600/20',
    accent: '#A5B4FC',
    icon: 'CalendarCheck2',
    role: 'Full-Stack Developer',
    duration: '2025',
    type: 'Productivity / Web Application',
    status: 'Completed',
    hidden: true,
  },

  {
    title: 'Web-Based Game',
    tagline: 'Classic Snake with scoring and collision logic.',
    description:
      'An interactive browser-based Snake game featuring keyboard controls, scoring, collision detection, and dynamic gameplay.',
    overview: [
      'A classic Snake experience reimagined as a fast-paced arrow-based game, featuring simple yet engaging gameplay, responsive controls, and progressively challenging levels. The game combines familiar Snake mechanics with an arrow-focused movement system to create a fresh and interactive experience.',
      'Includes scoring, collision handling, and game-state flow for start, play, and game-over.',
    ],
    features: [
      {
        title: 'Controls',
        description: 'Smooth keyboard movement',
        icon: 'Keyboard',
      },
      {
        title: 'Scoring',
        description: 'Tracks points as you play',
        icon: 'Trophy',
      },
      {
        title: 'Game State',
        description: 'Start, play, and game-over flow',
        icon: 'Play',
      },
      {
        title: 'Collisions',
        description: 'Detects walls and self-hits',
        icon: 'Bomb',
      },
      {
        title: 'Dynamic Play',
        description: 'Responsive gameplay loop',
        icon: 'Gamepad2',
      },
      {
        title: 'DOM Logic',
        description: 'Built with vanilla JavaScript',
        icon: 'Code2',
      },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Game Logic'],
    gradient: 'from-green-500/20 to-lime-600/20',
    accent: '#86EFAC',
    icon: 'Gamepad2',
    role: 'Frontend Developer',
    duration: '2024',
    type: 'Browser Game',
    status: 'Completed',
    liveUrl: 'https://arrow-kappa-ten.vercel.app/',
  },

  {
    title: 'Electric Bill Payment System',
    tagline: 'Desktop billing and customer account management.',
    description:
      'A desktop application for managing electricity bills, customer payments, and account information efficiently.',
    overview: [
      'A desktop billing application for customer accounts, bill calculation, and payment tracking.',
      
    ],
    features: [
      {
        title: 'Customers',
        description: 'Manage account holders',
        icon: 'Users',
      },
      {
        title: 'Billing',
        description: 'Calculate electricity charges',
        icon: 'Calculator',
      },
      {
        title: 'Payments',
        description: 'Process customer payments',
        icon: 'Wallet',
      },
      {
        title: 'Accounts',
        description: 'Track account information',
        icon: 'FolderOpen',
      },
      {
        title: 'Database',
        description: 'Persist billing records',
        icon: 'Database',
      },
      {
        title: 'Desktop UI',
        description: 'C++ GUI application',
        icon: 'AppWindow',
      },
    ],
    technologies: ['C++', 'C++ GUI', 'Object-Oriented Programming', 'Database Management'],
    gradient: 'from-amber-500/20 to-orange-600/20',
    accent: '#FCD34D',
    icon: 'Zap',
    role: 'Software Developer',
    duration: '2024',
    type: 'Desktop Application',
    status: 'Completed',
    hideLiveDemo: true,
  },
]
