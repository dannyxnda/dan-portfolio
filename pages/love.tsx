import { Layout } from 'components/templates/layout'
import { CONFESSION_TIME, DATE_PHOTO } from 'data/constant/love'
import Image from 'next/image'
import { Counter } from 'pageComponents/Love/Counter'
import { StyledLoveContainer } from 'pageComponents/Love/index.styled'
import { Fade } from 'react-awesome-reveal'

const Love = () => {
  return (
    <Layout isHeaderShown={false} isFooterShown={false}>
      <StyledLoveContainer>
        <Fade duration={2000} delay={1000}>
          <Image
            src={DATE_PHOTO}
            alt="Duc-Anh Nguyen"
            layout="fill"
            objectFit="cover"
          />
        </Fade>
        <Counter />
      </StyledLoveContainer>
    </Layout>
  )
}

export default Love
