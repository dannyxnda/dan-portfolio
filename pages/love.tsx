import { Layout } from 'components/templates/layout'
import { DATE_PHOTO } from 'data/constant/love'
import Image from 'next/image'
import { Counter } from 'pageComponents/Love/Counter'
import { StyledLoveContainer } from 'pageComponents/Love/index.styled'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

const Love = () => {
  const [photoLoaded, setPhotoLoaded] = useState<boolean>(false)

  return (
    <Layout isHeaderShown={false} isFooterShown={false}>
      <StyledLoveContainer>
        <Fade duration={2000}>
          <div
            style={{
              opacity: photoLoaded ? 1 : 0,
            }}
          >
            <Image
              src={DATE_PHOTO}
              alt="Duc-Anh Nguyen"
              layout="fill"
              objectFit="cover"
              onLoad={() => setPhotoLoaded((l) => !l)}
            />
          </div>
        </Fade>
        <Counter />
      </StyledLoveContainer>
    </Layout>
  )
}

export default Love
