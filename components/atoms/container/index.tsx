import React from 'react'
import { StyledBaseContainer } from './index.styled'

type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className, ...rest }: Props) => {
  return (
    <StyledBaseContainer className={className} {...rest}>
      {children}
    </StyledBaseContainer>
  )
}

export { Container }
