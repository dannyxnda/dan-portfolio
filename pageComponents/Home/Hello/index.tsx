import React, { useState } from 'react'

import { Container } from 'components/atoms/container'
import { StyledHelloContainer } from './index.styled'
import { hello } from 'data/hello'
import Typical from 'react-typical'
import { DannyLogo } from 'components/atoms/danny'
import Fade from 'react-reveal/Fade'
import clsx from 'clsx'

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
      <Container className="container">
        <Fade top>
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
