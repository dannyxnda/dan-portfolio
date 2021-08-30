import styled from 'styled-components'
import { ThemeProps } from 'styles/theme'

export const StyledHelloContainer = styled.section`
  height: max(100vh, 500px);
  background-image: url('/images/hellobg.jpeg');
  background-size: cover;
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.helloBackground};
  animation: hellosection 2s ease;

  @keyframes hellosection {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .container {
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
