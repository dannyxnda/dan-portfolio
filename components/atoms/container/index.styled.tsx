import styled from 'styled-components'
import { desktop, mobile } from 'styles/breakpoints'

export const StyledBaseContainer = styled.div`
  ${desktop} {
    max-width: 1056px;
    margin: auto;
  }

  padding: 0 16px;
  ${mobile} {
  }
`
