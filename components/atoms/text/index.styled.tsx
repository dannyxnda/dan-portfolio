import React from 'react'

import styled from 'styled-components'
import { ThemeProps } from 'styles/theme'

const Heading = ({
  type,
  ...elementProps
}: {
  type: string
  [elementProps: string]: string | JSX.Element | JSX.Element[] | React.ReactNode
}) => {
  return React.createElement(type, elementProps)
}

export const StyledHeading = styled(Heading)`
  color: var(
    --text-color,
    ${(props: ThemeProps) => props.theme.colors.defaultColor}
  );
  /* font-family: Krub; */
  font-weight: 600;
  letter-spacing: -0.2px;

  &[data-type='headline-1'] {
    font-size: 40px;
    line-height: 60px;
  }
  &[data-type='headline-2'] {
    font-size: 32px;
    line-height: 48px;
  }
  &[data-type='headline-3'] {
    font-size: 24px;
    line-height: 40px;
  }
  &[data-type='headline-4'] {
    font-size: 18px;
    line-height: 32px;
  }
`

export const StyledText = styled.p`
  color: var(
    --text-color,
    ${(props: ThemeProps) => props.theme.colors.defaultColor}
  );
  letter-spacing: -0.2px;

  &[data-type='subtitle-1'] {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }
  &[data-type='subtitle-2'] {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
  &[data-type='subtitle-3'] {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
  }
  &[data-type='bodytext-1'] {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
  }
  &[data-type='bodytext-2'] {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  &[data-type='bodytext-3'] {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
  &[data-type='caption-1'] {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: -0.1px;
    line-height: 14px;
  }
  &[data-type='caption-2'] {
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.1px;
    line-height: 14px;
  }
`
