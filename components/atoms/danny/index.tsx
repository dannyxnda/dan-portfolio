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

const DannyLogoWithPaddingSvg = (props: { size: number }) => {
  const { size } = props

  const min = size * 0.2
  const max = size * 0.8
  const center = size / 2
  const maxContentLength = size * 0.6

  const bigOnePoints = [
    [min, min],
    [min, max],
    [center, center],
  ]
    .map((point) => point.join())
    .join(' ')

  const midSmall = size * 0.53

  const smallOnePoints = [
    [min + maxContentLength * 0.1, max],
    [midSmall, midSmall],
    [max, max],
  ]
    .map((point) => point.join())
    .join(' ')

  return (
    <svg height={size} width={size} fill="pink">
      <polygon points={bigOnePoints} style={{ fill: 'black' }} />
      <polygon points={smallOnePoints} style={{ fill: 'black' }} />
    </svg>
  )
}

export { DannyLogo, DannyLogoSvg, DannyLogoWithPaddingSvg }
