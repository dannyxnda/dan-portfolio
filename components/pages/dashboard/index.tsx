import Image from 'next/image'

import { DannyLogo } from 'components/atoms/danny'
import { Container } from 'components/atoms/container'
import { StyledDashboardContainer, StyledTag } from './index.styled'

const tags = ['Javascript', 'Typescript', 'React.js', 'Next.js']
const contacts = [
  {
    href: 'https://www.linkedin.com/in/dannyxnda/',
    icon: '/images/linkedin.png',
    text: 'dannyxnda',
  },
  {
    href: 'https://github.com/dannyxnda',
    icon: '/images/github.png',
    text: 'dannyxnda',
  },
]

const DashBoard = () => {
  return (
    <StyledDashboardContainer>
      <Container>
        <div className="content">
          <DannyLogo size={200} />
          <div className="text-tag">
            <h1 className="welcome">FunnyFunction.Fun</h1>
            <p>I&apos;m Danny and I&apos;m working as a Front-end Developer.</p>

            <div className="tags-container">
              {tags.map((t, i) => (
                <div key={i}>
                  <StyledTag>{t}</StyledTag>
                </div>
              ))}
            </div>

            <div className="contacts-container">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  className="contact"
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image width={24} height={24} src={c.icon} alt="github" />
                  <p>{c.text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </StyledDashboardContainer>
  )
}

export { DashBoard }
