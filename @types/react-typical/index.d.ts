declare module 'react-typical' {
  import { FunctionComponent } from 'react'
  type Props = {
    steps: (string | number)[]
    loop?: number
    className?: string
  }

  const Typical: FunctionComponent<Props>
  export = Typical
}
