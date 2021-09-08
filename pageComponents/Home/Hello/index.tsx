import React, { useState } from 'react'

import { Container } from 'components/atoms/container'
import { StyledHelloContainer } from './index.styled'
import { hello } from 'data/hello'
import Typical from 'react-typical'
import { DannyLogo } from 'components/atoms/danny'
import Fade from 'react-reveal/Fade'
import clsx from 'clsx'
import Image from 'next/image'

const Hello = () => {
  const [isNameStop, setIsNameStop] = useState<boolean>(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsNameStop(true)
    }, 1200)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledHelloContainer data-section="hello">
      <Image
        className="fake-bg"
        src="/images/hellobg.jpeg"
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <Container className="container">
        <Fade bottom>
          <div className="danny-logo-container">
            <DannyLogo />
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
