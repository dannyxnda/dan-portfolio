import { CSSProperties } from 'styled-components'
import { StyledDannyLogo } from './index.styled'

type Props = {
  size?: number
  style?: CSSProperties
}

export type LogoMode = 'design' | 'prod'

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

const DannyLogoWithPaddingSvg = (props: {
  width: number
  padding?: number
  mode?: LogoMode
  backgroundFill?: string
}) => {
  const { width: w, padding: p = 0, mode = 'prod', backgroundFill } = props

  const bigOnePoints = [[p, p], [p, w - p], Array(2).fill(w / 2)]
    .map((point) => point.join())
    .join(' ')

  const smallOnePoints = [
    [w / 10 + p * 0.8, w - p],
    Array(2).fill(0.55 * w - p / 10),
    Array(2).fill(w - p),
  ]
    .map((point) => point.join())
    .join(' ')

  return (
    <svg height={w} width={w}>
      {!!backgroundFill && (
        <rect width="100%" height="100%" fill={backgroundFill} />
      )}
      {mode === 'design' && (
        <circle r={w / 2} cx={w / 2} cy={w / 2} fill="pink" />
      )}
      <polygon points={bigOnePoints} style={{ fill: 'black' }} />
      <polygon points={smallOnePoints} style={{ fill: 'black' }} />
    </svg>
  )
}

export { DannyLogo, DannyLogoSvg, DannyLogoWithPaddingSvg }
