import styled from 'styled-components'
import { breakpoints } from 'styles/breakpoints'

export const StyledDashboardContainer = styled.div`
  & .content {
    display: flex;
    justify-content: center;
    margin-top: 24%;
    align-items: center;
    text-align: center;

    @media (max-width: ${breakpoints.tablet - 1}px) {
      flex-direction: column;
      & .text-tag {
        margin-top: 24px;
      }
    }
  }

  & .text-tag {
    margin-left: 32px;
    @media (max-width: ${breakpoints.tablet - 1}px) {
      margin-left: 0;
    }

    h1 {
      margin-top: 0;
    }

    p {
      margin: 8px 0;
    }
  }

  & .tags-container {
    margin: 0 -4px;
    & > div {
      display: inline-block;
      padding: 0 4px;
    }
  }

  & .contacts-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;

    & > a {
      border-bottom: 2px solid;
    }

    & > a:not(:first-child) {
      margin-left: 24px;
    }
  }

  & .contact {
    display: flex;

    & p {
      margin-left: 8px;
    }

    & img {
      object-fit: contain;
    }
  }
`

export const StyledTag = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding: 8px;
  border: 2px solid;
  border-radius: 24px;
`
