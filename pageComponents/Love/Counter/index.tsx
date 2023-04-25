import { Container } from 'components/atoms/container'
import { StyledCounterContainer } from './index.styled'
import { Fade } from 'react-awesome-reveal'
import { Heading, Text } from 'components/atoms/text'
import { format, formatDuration, intervalToDuration } from 'date-fns'
import { CONFESSION_TIME } from 'data/constant/love'
import { useEffect, useState } from 'react'
import { Duration } from 'date-fns'

const Counter = () => {
  const time = new Date(CONFESSION_TIME)

  const [duration, setDuration] = useState<Duration>(
    intervalToDuration({
      start: time,
      end: new Date(),
    })
  )

  useEffect(() => {
    const listener = setInterval(() => {
      const d = intervalToDuration({
        start: time,
        end: new Date(),
      })

      setDuration(d)
    }, 1000)

    return () => clearInterval(listener)
  }, [])

  return (
    <StyledCounterContainer>
      <Fade duration={2000} delay={2000}>
        <Container className="container">
          <Heading type="h3" color="white">
            {format(time, 'PPpp')} is the day we promised.
          </Heading>
          <Heading type="h3" color="white">
            We have been together for:
          </Heading>

          {!!duration && (
            <Heading type="h3" color="white" className="main-countdown">
              {formatDuration(duration, {
                delimiter: ', ',
              })}
            </Heading>
          )}
        </Container>
      </Fade>
    </StyledCounterContainer>
  )
}

export { Counter }
