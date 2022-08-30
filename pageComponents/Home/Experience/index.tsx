import Image from 'next/image'
import { StyledExperienceContainer } from './index.styled'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { experience } from 'data/experience'
import { Container } from 'components/atoms/container'
import { Heading, Text } from 'components/atoms/text'

import { useScreenSize } from 'src/utils/useScreenSize'

import { Fade } from 'react-awesome-reveal'

const Experience = () => {
  const { width } = useScreenSize()
  const imgSize = width < 1170 ? '40px' : '60px'

  return (
    <StyledExperienceContainer className="section__experience">
      <Container>
        <Fade direction="left">
          <Heading type="h1" className="heading">
            Experience
          </Heading>
        </Fade>
        <VerticalTimeline>
          {experience.map((e, i) => (
            <VerticalTimelineElement
              key={i}
              icon={
                <div className="company-icon">
                  <Image src={e.icon} width={imgSize} height={imgSize} alt="" />
                </div>
              }
              date={e.date}
            >
              <Text type="subtitle-1">{e.company}</Text>
              <Text type="bodytext-2" className="role">
                {e.role}
              </Text>
              <Text type="bodytext-2">
                {e.tech.map((t, techIndex) => (
                  <span className="tech-tag" key={techIndex}>
                    {t}
                  </span>
                ))}
              </Text>
              <Text type="bodytext-2">
                {e.languages.map((l, i) => (
                  <span className="tech-tag" key={i}>
                    {l}
                  </span>
                ))}
              </Text>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </StyledExperienceContainer>
  )
}

export { Experience }
