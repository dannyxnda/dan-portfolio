type TechType = {
  languages: {
    icon: string
    name: string
  }[]
  libs: {
    icon: string
    name: string
  }[]
  others: {
    icon: string
    name: string
  }[]
}

export const tech: TechType = {
  languages: [
    {
      icon: '/images/js.png',
      name: 'Javascript',
    },
    {
      icon: '/images/ts.png',
      name: 'Typescript',
    },
    { icon: '/images/html.png', name: 'HTML' },
    { icon: '/images/css.png', name: 'CSS' },
  ],
  libs: [
    {
      icon: '/images/react.png',
      name: 'React.js',
    },
    {
      icon: '/images/next.png',
      name: 'Next.js',
    },
  ],
  others: [
    {
      icon: '/images/git.jpg',
      name: 'Git',
    },
  ],
}
