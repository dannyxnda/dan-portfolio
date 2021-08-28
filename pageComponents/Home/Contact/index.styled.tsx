import styled from 'styled-components'
import { ThemeProps } from 'styles/theme'

export const StyledContactContainer = styled.div`
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.contactBackground};
`
