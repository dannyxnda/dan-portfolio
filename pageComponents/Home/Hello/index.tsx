import React, { useState } from 'react'

import { Container } from 'components/atoms/container'
import { StyledHelloContainer } from './index.styled'
import { hello } from 'data/hello'
import Typical from 'react-typical'
import Fade from 'react-reveal/Fade'
import clsx from 'clsx'
import Image from 'next/image'
import { DannyLogoSvg } from 'components/atoms/danny'

const Hello = () => {
  const [isNameStop, setIsNameStop] = useState<boolean>(false)
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsNameStop(true)
    }, 1200)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledHelloContainer data-section="hello">
      <Image
        className={clsx('fake-bg', {
          'img-loaded': isImgLoaded,
        })}
        src="/images/hellobg.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        onLoad={() => setIsImgLoaded(true)}
      />
      <Container className="container">
        <Fade bottom>
          <div className="danny-logo-container">
            <DannyLogoSvg size={200} />
          </div>
        </Fade>

        <Typical
          className={clsx('typical__my-name', {
            stop: isNameStop,
          })}
          steps={[hello.name]}
        />

        {isNameStop ? (
          <Typical
            className="typical__description"
            steps={hello.typicalSteps}
            loop={1}
          />
        ) : (
          <p className="typical__description">&nbsp;</p>
        )}
      </Container>
    </StyledHelloContainer>
  )
}

export { Hello }
