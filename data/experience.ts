type Experience = {
  icon: string
  date: string
  company: string
  role: string
  tech: string[]
  languages: string[]
}[]

export const experience: Experience = [
  {
    icon: '/images/company/nab.png',
    date: 'Nov 2022 - Present',
    company: 'National Australia Bank',
    role: 'Front-end Engineer',
    tech: ['React.js'],
    languages: ['Javascript', 'Typescript'],
  },
  {
    icon: '/images/company/hhg.png',
    date: 'Jul 2021 - Oct 2022',
    company: 'Hello Health Group',
    role: 'Front-end Developer',
    tech: ['React.js', 'Next.js'],
    languages: ['Javascript', 'Typescript'],
  },
  {
    icon: '/images/company/advesa.png',
    date: 'Aug 2020 - Jun 2021',
    company: 'Advesa Digital Solutions',
    role: 'Front-end Developer',
    tech: ['React.js'],
    languages: ['Javascript'],
  },
  {
    icon: '/images/company/appota.png',
    date: 'Aug 2019 - Jul 2020',
    company: 'Appota',
    role: 'Front-end Developer',
    tech: ['React.js', 'React Native'],
    languages: ['Javascript'],
  },
  {
    icon: '/images/company/teko.jpeg',
    date: 'Jul 2019 - Aug 2019',
    company: 'Teko Vietnam',
    role: 'Web Developer (internship)',
    tech: ['Flask', 'React.js'],
    languages: ['Python', 'Javascript'],
  },
]
