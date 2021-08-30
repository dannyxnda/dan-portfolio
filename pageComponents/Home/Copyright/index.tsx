import { Container } from 'components/atoms/container'
import { Text } from 'components/atoms/text'
import { StyledFooterContainer } from './index.styled'

const Footer = () => {
  return (
    <StyledFooterContainer>
      <Container>
        <Text type="subtitle-2">© Duc Anh Nguyen | Danny</Text>
      </Container>
    </StyledFooterContainer>
  )
}

export { Footer }
