import Image from 'next/image'

import { Container } from 'components/atoms/container'
import { StyledContactContainer } from './index.styled'

import { contacts } from 'data/contact'

const Contact = () => {
  return (
    <StyledContactContainer>
      <Container>
        {contacts.links.map((l, i) => (
          <div className="icon-container" key={i}>
            <Image src={l.icon} alt="" width="32px" height="32px" />
          </div>
        ))}
      </Container>
    </StyledContactContainer>
  )
}

export { Contact }
