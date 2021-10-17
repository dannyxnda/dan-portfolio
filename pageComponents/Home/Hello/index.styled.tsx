import styled from 'styled-components'
import { ThemeProps } from 'styles/theme'

export const StyledHelloContainer = styled.section`
  @keyframes hellosection {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: relative;
  height: max(100vh, 500px);
  /* background-image: url('/images/hellobg.jpeg');
  background-size: cover; */
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.helloBackground};
  animation: hellosection 2s ease;

  @keyframes fakebg {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .fake-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: fakebg 3s linear;
    display: none;

    &.img-loaded {
      display: initial;
    }
  }

  .container {
    position: relative;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .danny-logo-container {
      width: 200px;
      height: 200px;
    }

    .typical__my-name {
      font-size: 40px;
      font-weight: 600;
      margin-top: 40px;
      /* color: ${(props: ThemeProps) => props.theme.colors.white}; */

      &.stop:after {
        display: none;
      }
    }
    .typical__description {
      font-size: 26px;
      /* color: ${(props: ThemeProps) => props.theme.colors.white}; */
    }
  }
`
