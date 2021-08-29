import Image from 'next/image'

import { Container } from 'components/atoms/container'
import { StyledContactContainer } from './index.styled'
import { Heading } from 'components/atoms/text'
import Fade from 'react-reveal/Fade'

import { contacts } from 'data/contact'

const Contact = () => {
  return (
    <StyledContactContainer>
      <Container>
        <Fade left>
          <Heading type="h1" className="heading">
            Contact
          </Heading>
        </Fade>

        <div className="link-container">
          {contacts.links.map((l, i) => (
            <div className="icon-container" key={i}>
              <a href={l.href}>
                <Image src={l.icon} alt="" width="32px" height="32px" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </StyledContactContainer>
  )
}

export { Contact }
