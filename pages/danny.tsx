import { DannyLogoWithPaddingSvg } from 'components/atoms/danny'
import { useState } from 'react'

const DannyLogo = () => {
  const [size, setSize] = useState<number>(100)

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: size,
        height: size,
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        style={{
          position: 'fixed',
          bottom: 10,
          right: 10,
        }}
      />
      <div
        style={{
          display: 'inline-block',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'blue',
          opacity: 0.4,
          borderRadius: '50%',
        }}
      />
      <DannyLogoWithPaddingSvg size={size} />
    </div>
  )
}

export default DannyLogo
