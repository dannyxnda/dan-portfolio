import styled from 'styled-components'
import { sp } from 'styles/breakpoints'
import { ThemeProps } from 'styles/theme'

export const StyledAboutContainer = styled.section`
  background: ${(props: ThemeProps) => props.theme.colors.aboutBackground};
  padding: 32px 0;

  .content {
    display: flex;
  }

  .img-wrapper {
    div {
      height: unset;
    }
    img {
      min-width: 400px;
      object-fit: contain;
    }
  }

  .info {
    padding: 0px 32px;
    ${sp} {
      padding: 0;
    }
    p {
      line-height: 1.35;
    }
  }

  .styled-first-letter {
    display: inline-block;
    ::first-letter {
      color: #bfff00;
    }
  }

  a {
    color: #7085c1;
  }
`
