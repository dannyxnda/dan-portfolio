import styled from 'styled-components'
import { ThemeProps } from 'styles/theme'

export const StyledExperienceContainer = styled.div`
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.experienceBackground};
`
