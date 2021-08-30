import styled from 'styled-components'
import { ThemeProps } from 'styles/theme'

export const StyledExperienceContainer = styled.section`
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.experienceBackground};
  padding: 32px 0;
  overflow: hidden;

  .heading {
    text-align: center;
  }

  .company-icon {
    border-radius: 50%;
    overflow: hidden;

    width: 60px;
    height: 60px;

    @media screen and (max-width: 1169px) {
      width: 40px;
      height: 40px;
    }
  }

  .vertical-timeline-element-content p {
    margin: 0;
  }

  .role {
    color: #d3abab;
  }

  .tech-tag {
    display: inline-block;
    border: 2px solid;
    margin: 1px;
    padding: 0 4px;
  }
`
