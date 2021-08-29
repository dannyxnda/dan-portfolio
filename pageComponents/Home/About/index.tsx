// import Image from 'next/image'
import { Container } from 'components/atoms/container'
import { StyledAboutContainer } from './index.styled'
import { Heading } from 'components/atoms/text'
import Fade from 'react-reveal/Fade'

import { about } from 'data/about'

const About = () => {
  return (
    <StyledAboutContainer>
      <Container>
        <Fade left>
          <Heading type="h1" className="heading">
            About me
          </Heading>
        </Fade>
        <div className="content">
          {/* <Fade left>
            <Image
              className="img-wrapper"
              src={about.img}
              alt="My picture"
              width="100%"
              height="100%"
            />
          </Fade> */}

          <Fade bottom cascade>
            <div className="info">
              <Heading type="h3">{about.text.heading}</Heading>
              {/* <div
              dangerouslySetInnerHTML={{
                __html: about.text.text,
              }}
            /> */}

              <div>
                <p>
                  <span>My full name is </span>
                  <span>Nguyễn Đức Anh</span>
                  <span>
                    &nbsp;(with tone marks). I have an English name - Danny, it
                    means&nbsp;DAN &amp; Youth.
                  </span>
                  {/* <span className="styled-first-letter">Duc&nbsp;</span>
                  <span className="styled-first-letter">Anh&nbsp;</span>
                  <span className="styled-first-letter">Nguyen&nbsp;</span>
                  <span className="styled-first-letter">N&nbsp;</span>
                  <span className="styled-first-letter">Youth&nbsp;.</span> */}
                </p>
                <p>
                  I love music, one of the songs I love the most is{' '}
                  <a
                    href="https://youtu.be/UpHHPkLkoG8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Count on me
                  </a>
                  . That&apos;s really cute!
                </p>
                <p>
                  I&apos;d studied at the{' '}
                  <a href="https://uet.vnu.edu.vn/">
                    University of Engineering and Technology - Vietnam National
                    University
                  </a>{' '}
                  from 2016 and graduated in Computer Science in 2020
                </p>
                <p>
                  Currently I&apos;m living in HCMC and working as a Front-end
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
