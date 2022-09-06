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
                    href="https://youtu.be/fgpwTxIv76Q"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nhắm mắt thấy mùa hè
                  </a>
                  . That reminds me of summer memories in the North of
                  Vietnam...
                </p>
                <p>I want to go to everywhere...</p>
                <p>
                  I&apos;d studied at the{' '}
                  <a href="https://uet.vnu.edu.vn/">
                    University of Engineering and Technology - Vietnam National
                    University
                  </a>{' '}
                  from 2016 and graduated in Computer Science in 2020.
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
