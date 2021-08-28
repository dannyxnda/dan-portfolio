declare module 'react-reveal/Fade' {
  import { FunctionComponent } from 'react'
  type Props = {
    top?: boolean
    right?: boolean
    bottom?: boolean
    left?: boolean
    clear?: boolean
  }

  const Component: FunctionComponent<Props>
  export = Component
}

declare module 'react-reveal/Zoom' {
  import { FunctionComponent } from 'react'
  type Props = {
    top?: boolean
    right?: boolean
    bottom?: boolean
    left?: boolean
    clear?: boolean
  }

  const Component: FunctionComponent<Props>
  export = Component
}
