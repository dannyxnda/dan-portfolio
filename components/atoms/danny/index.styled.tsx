import styled from 'styled-components'

export const StyledDannyLogo = styled.div`
  width: 0;
  height: 0;
  border: calc(var(--logo-size) * 0.5px) solid transparent;
  border-left-color: black;
  display: inline-block;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    border: calc(var(--logo-size) * 0.45px) solid transparent;
    border-bottom-color: black;
    bottom: calc(var(--logo-size) * -0.5px);
    left: calc(var(--logo-size) * -0.4px);
  }
`
