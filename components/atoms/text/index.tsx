import { CSSProperties } from 'styled-components'

import { StyledHeading, StyledText } from './index.styled'

type HeadingProps = {
  type?: 'h1' | 'h2' | 'h3' | 'h4'
  color?: string
  style?: CSSProperties
  [x: string]: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const Heading = ({ type, color, style, ...props }: HeadingProps) => {
  const DATATYPE = {
    h1: 'headline-1',
    h2: 'headline-2',
    h3: 'headline-3',
    h4: 'headline-4',
  }

  return (
    <StyledHeading
      type={type}
      {...(type && { ['data-type']: DATATYPE[type] })}
      style={{ ...(color && { '--text-color': color }), ...style }}
      {...props}
    />
  )
}

type TextProps = {
  type?:
    | 'subtitle-1'
    | 'subtitle-2'
    | 'subtitle-3'
    | 'bodytext-1'
    | 'bodytext-2'
    | 'bodytext-3'
    | 'caption-1'
    | 'caption-2'
  color?: string
  style?: CSSProperties
  [x: string]: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const Text = ({ type, color, style, ...props }: TextProps) => {
  return (
    <StyledText
      data-type={type}
      style={{ ...(color && { '--text-color': color }), ...style }}
      {...props}
    />
  )
}

export { Heading, Text }
