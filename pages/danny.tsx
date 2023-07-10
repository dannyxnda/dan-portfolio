import { DannyLogoWithPaddingSvg } from 'components/atoms/danny'

const DannyLogo = () => {
  return (
    <div
      style={{
        background: 'pink',
        position: 'relative',
        display: 'inline-block',
      }}
    >
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
      <DannyLogoWithPaddingSvg size={10} />
    </div>
  )
}

export default DannyLogo
