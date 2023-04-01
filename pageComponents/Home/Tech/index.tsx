import { Container } from 'components/atoms/container'
import { Heading, Text } from 'components/atoms/text'
import { tech } from 'data/tech'
import { StyledTechContainer } from './index.styled'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

import { useScreenSize } from 'src/utils/useScreenSize'

const Tech = () => {
  const { isMobile } = useScreenSize()
  const imgSize = isMobile ? '32px' : '64px'

  return (
    <StyledTechContainer>
      <Container>
        <Fade direction="left" triggerOnce>
          <Heading type="h1" className="heading">
            Technology
          </Heading>
        </Fade>

        <Fade direction="right" cascade triggerOnce>
          <div className="content">
            <div className="techlist languages">
              {tech.languages.map((l, i) => (
                <div key={i} data-hover={l.name}>
                  <Image
                    src={l.icon}
                    width={imgSize}
                    height={imgSize}
                    alt={l.name}
                  />
                  <Text>{l.name}</Text>
                </div>
              ))}
            </div>

            <div className="techlist libs">
              {tech.libs.map((l, i) => (
                <div key={i} data-hover={l.name}>
                  <Image
                    src={l.icon}
                    width={imgSize}
                    height={imgSize}
                    alt={l.name}
                  />
                  <Text>{l.name}</Text>
                </div>
              ))}
            </div>

            <div className="techlist others">
              {tech.others.map((o, i) => (
                <div key={i} data-hover={o.name}>
                  <Image
                    src={o.icon}
                    width={imgSize}
                    height={imgSize}
                    alt={o.name}
                  />
                  <Text>{o.name}</Text>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </Container>
    </StyledTechContainer>
  )
}

export { Tech }
