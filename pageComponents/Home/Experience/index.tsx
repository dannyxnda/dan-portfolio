import Image from 'next/image'
import { StyledExperienceContainer } from './index.styled'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { experience } from 'data/experience'
import { Container } from 'components/atoms/container'

const Experience = () => {
  return (
    <StyledExperienceContainer>
      <Container>
        <VerticalTimeline>
          {experience.map((e, i) => (
            <VerticalTimelineElement
              key={i}
              icon={<Image src={e.icon} width="100px" height="100px" alt="" />}
              date={e.date}
            >
              <div>{e.company}</div>
              <div>{e.role}</div>
              <div>
                {e.tech.map((t, techIndex) => (
                  <div key={techIndex}>{t}</div>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </StyledExperienceContainer>
  )
}

export { Experience }
