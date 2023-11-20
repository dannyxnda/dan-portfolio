import { Hello } from './Hello'
import { About } from './About'
import { Experience } from './Experience'
import { Contact } from './Contact'
// import { Tech } from './Tech'
import { Footer } from './Copyright'
import { StyledHomeContainer } from './index.styled'

const Home = () => {
  return (
    <StyledHomeContainer>
      <Hello />
      <About />
      {/* <Tech /> */}
      <Experience />
      <Contact />
      <Footer />
    </StyledHomeContainer>
  )
}

export default Home
