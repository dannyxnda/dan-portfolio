import styled from 'styled-components'
import { sp } from 'styles/breakpoints'
import { ThemeProps } from 'styles/theme'

export const StyledTechContainer = styled.section`
  padding: 32px 0;
  background-color: ${(props: ThemeProps) => props.theme.colors.techBackground};

  .content {
    text-align: center;
  }

  .techlist {
    display: inline-flex;
    flex-wrap: wrap;
    > div {
      min-width: 104px;
      text-align: center;
      ${sp} {
        min-width: 80px;
      }

      > div {
        border-radius: 16px;
        ${sp} {
          border-radius: 8px;
        }
      }

      > p {
        margin-top: 8px;
      }
    }
  }
`