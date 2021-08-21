import styled from 'styled-components'

export const StyledDannyLogo = styled.div`
  width: 0;
  height: 0;
  border: 100px solid transparent;
  border-left-color: black;
  display: inline-block;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    border: 90px solid transparent;
    border-bottom-color: black;
    bottom: -100px;
    left: -80px;
  }
`
