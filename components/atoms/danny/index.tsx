import { CSSProperties } from 'styled-components'
import { StyledDannyLogo } from './index.styled'

type Props = {
  size?: number
  style?: CSSProperties
}

const DannyLogo = ({ size, style }: Props) => {
  return (
    <StyledDannyLogo
      style={{
        ...(size && { '--logo-size': size }),
        ...style,
      }}
    />
  )
}

export { DannyLogo }
