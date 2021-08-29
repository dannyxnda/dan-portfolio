import styled from 'styled-components'
import { ThemeProps } from 'styles/theme'

export const StyledContactContainer = styled.section`
  padding: 32px 0;
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.contactBackground};

  .link-container {
    display: flex;
    margin: 16px -16px 0;
    justify-content: center;

    .icon-container {
      padding: 0 16px;
    }
  }
`
