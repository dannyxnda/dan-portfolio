import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'

export const StyledBaseContainer = styled.div`
  @media (min-width: ${breakpoints.tablet}px) {
    max-width: 1024px;
    margin: auto;
  }

  @media (max-width: ${breakpoints.tablet - 1}px) {
    padding: 0 16px;
  }
`
