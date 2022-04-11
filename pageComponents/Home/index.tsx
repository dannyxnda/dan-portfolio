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

const LOADING_TIME = 1000
const LOADING_ANIMAION_DISAPEAR = 200
const Home = () => {
  const [loading, setLoading] = useState<boolean>(
    // typeof window !== 'undefined' ? true : false
    true
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.removeProperty('overflow')
    }, LOADING_TIME)
    return () => clearTimeout(timer)
  }, [setLoading])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading === false) {
        const el = document.querySelector('#home-loading-overlay')
        el?.remove()
      }
    }, LOADING_ANIMAION_DISAPEAR)
  }, [loading])

  return (
    <StyledHomeContainer>
      <div
        id="home-loading-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          backgroundColor: 'white',
          opacity: loading ? 1 : 0,
          transition: `opacity ${LOADING_ANIMAION_DISAPEAR}ms linear`,
        }}
      >
        <div className="lds-hourglass" />
      </div>

      <div style={{ display: loading ? 'none' : 'block' }}>
        <Hello />
        <About />
        <Tech />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </StyledHomeContainer>
  )
}

export default Home
