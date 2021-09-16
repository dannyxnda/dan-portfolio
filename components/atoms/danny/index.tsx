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
        ...(size && { '--logo-size': size || 100 }),
        ...style,
      }}
    />
  )
}

const DannyLogoSvg = (props: { size: number }) => {
  const { size } = props

  const bigOnePoints = [
    [0, 0],
    [size / 2, size / 2],
    [0, size],
  ]
    .map((point) => point.join())
    .join(' ')

  const smallOnePoints = [
    [size / 10, size],
    [size * 0.55, size * 0.55],
    [size, size],
  ]
    .map((point) => point.join())
    .join(' ')

  return (
    <svg height={size} width={size}>
      <polygon points={bigOnePoints} style={{ fill: 'black' }} />
      <polygon points={smallOnePoints} style={{ fill: 'black' }} />
    </svg>
  )
}

export { DannyLogo, DannyLogoSvg }
