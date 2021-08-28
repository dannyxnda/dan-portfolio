import styled from 'styled-components'
import { pc, sp } from 'styles/breakpoints'

export const StyledBaseContainer = styled.div`
  ${pc} {
    max-width: 1024px;
    margin: auto;
  }

  ${sp} {
    padding: 0 16px;
  }
`
