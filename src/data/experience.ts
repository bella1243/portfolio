export interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Commercial Bank of Ethiopia',
    role: 'Network Infrastructure Intern',
    period: '2024',
    highlights: [
      'Worked on network infrastructure projects',
      'Team lead on a bank networking system project',
      'Assisted with enterprise networking and system design',
    ],
  },
  {
    company: 'Yeenta Code',
    role: 'Programming & Robotics Instructor',
    period: '2023',
    highlights: [
      'Taught programming and robotics',
      'Helped develop educational technology solutions',
      'Assisted in creating a learning website for students',
    ],
  },
]
