export interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Revelo',
    role: 'Software Engineer',
    period: '2026',
    highlights: [
      'Evaluated AI-generated code and system outputs for correctness, efficiency, and production readiness, ensuring alignment with software engineering best practices',
      'Analyzed model responses across diverse programming scenarios, identifying logical errors, edge-case failures, and optimization opportunities',
      'Provided structured feedback and grading on AI outputs, improving overall model reliability and real-world applicability',
    ],
  },
  {
    company: 'Mindware Computer Network',
    role: 'System Administrator',
    period: '2025',
    highlights: [
      'Configured internal server components, including hardware integration and containerized environments',
      'Led a team in building and deploying server systems from scratch, ensuring reliability',
      'Managed and monitored server operations, maintaining system stability and minimizing downtime',
    ],
  },
  
  {
    company: 'Commercial Bank of Ethiopia (CBE)',
    role: 'Network Engineering Intern',
    period: '2024',
    highlights: [
      'Worked on network infrastructure projects',
      'Team lead on a bank networking system project',
      'Assisted with enterprise networking and system design',
    ],
  },
  {
    company: 'Yenetta Code',
    role: 'Programming & Robotics Intern',
    period: '2023',
    highlights: [
      'Mentored 20+ students in basic programming and robotics ',
      'Supported the creation of a web-based learning platform used by over 100 students weekly',
      'Helped design course modules that improved student engagement',
    ],
  },
]
