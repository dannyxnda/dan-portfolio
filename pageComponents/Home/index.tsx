import { Hello } from './Hello'
import { About } from './About'
import { Experience } from './Experience'
import { Contact } from './Contact'
import { Tech } from './Tech'

const Home = () => {
  return (
    <div>
      <Hello />
      <About />
      <Tech />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home
