import { useState, useEffect } from 'react'

import { Hello } from './Hello'
import { About } from './About'
import { Experience } from './Experience'
import { Contact } from './Contact'
import { Tech } from './Tech'
import styled from 'styled-components'
import { Footer } from './Copyright'

const StyledHomeContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;
`

const Home = () => {
  // const [loading, setLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 1500)
  //   return () => clearTimeout(timer)
  // }, [])

  // return (
  //   <StyledHomeContainer>
  //     {loading ? (
  //       <div className="__hello__">Hi! 🙌</div>
  //     ) : (
  //       <>
  //         <Hello />
  //         <About />
  //         <Tech />
  //         <Experience />
  //         <Contact />
  //         <Footer />
  //       </>
  //     )}
  //   </StyledHomeContainer>
  // )

  return (
    <StyledHomeContainer>
      <Hello />
      <About />
      <Tech />
      <Experience />
      <Contact />
      <Footer />
    </StyledHomeContainer>
  )
}

export default Home
