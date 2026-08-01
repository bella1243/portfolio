export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'Assembly Language', level: 65 },
    ],
  },
  {
    title: 'Web Development',
    icon: 'Globe',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Networking',
    icon: 'Network',
    skills: [
      { name: 'Computer Networking', level: 88 },
      { name: 'Network Infrastructure', level: 85 },
      { name: 'Troubleshooting', level: 90 },
      { name: 'Systems Integration', level: 82 },
    ],
  },
  {
    title: 'IoT & Embedded Systems',
    icon: 'Cpu',
    skills: [
      { name: 'ESP32', level: 88 },
      { name: 'Firebase Realtime Database', level: 85 },
      { name: 'Sensors and Actuators', level: 90 },
      { name: 'GPS Integration', level: 80 },
      { name: 'Embedded Programming', level: 85 },
    ],
  },
  {
    title: 'AI & Emerging Technologies',
    icon: 'Brain',
    skills: [
      { name: 'Generative AI', level: 85 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'AI Applications', level: 82 },
      { name: 'Automation', level: 80 },
    ],
  },
]
