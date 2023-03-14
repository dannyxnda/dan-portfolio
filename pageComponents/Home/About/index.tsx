import { Container } from 'components/atoms/container'
import { StyledAboutContainer } from './index.styled'
import { Heading } from 'components/atoms/text'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'

import { about } from 'data/about'

const About = () => {
  return (
    <StyledAboutContainer>
      <Container>
        <Fade direction="left">
          <Heading type="h1" className="heading">
            About me
          </Heading>
        </Fade>
        <div className="content">
          <Fade direction="left">
            <div>
              <Image
                className="img-wrapper"
                src={about.img}
                alt="Duc-Anh Nguyen"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Fade>

          <Fade direction="down" cascade>
            <div className="info">
              <h1>{about.text.heading}</h1>

              <div>
                <p>My full name is Nguyễn Đức Anh.</p>
                <p>
                  I love music, one of the songs I love the most is{' '}
                  <a
                    href="https://youtu.be/L17njonbcT0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lanterns
                  </a>
                  . Listening to that song is so exciting especially while I'm on my
                  motorbike.
                </p>
                <p>I want to travel around the world and discover any places.</p>
                <p>
                  I&apos;d studied at the{' '}
                  <a href="https://uet.vnu.edu.vn/">
                    University of Engineering and Technology - Vietnam National
                    University
                  </a>{' '}
                  from 2016 and graduated in Computer Science in 2020.
                </p>
                <p>
                  Currently I&apos;m living in Hanoi and working as a Front-end
                  Developer.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </StyledAboutContainer>
  )
}

export { About }
