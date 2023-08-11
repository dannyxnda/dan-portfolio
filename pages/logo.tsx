import { DannyLogoWithPaddingSvg, LogoMode } from 'components/atoms/danny'
import { useState } from 'react'
import isColor from 'is-color'

function Logo() {
  const [w, setW] = useState(200)
  const [p, setP] = useState(40)
  const [bg, setBg] = useState('')
  const [mode, setMode] = useState<LogoMode>('prod')

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: 'aqua',
        minHeight: '100vh',
      }}
    >
      <p>Design mode?</p>
      <input
        type="checkbox"
        checked={mode === 'design' ? true : false}
        onChange={() => setMode(mode === 'design' ? 'prod' : 'design')}
        placeholder="Is design mode"
      />
      <br />
      <input
        type="number"
        value={String(w)}
        onChange={(e) => setW(Number(e.target.value) || 0)}
        placeholder="Width"
      />
      <input
        type="number"
        value={String(p)}
        onChange={(e) => setP(Number(e.target.value) || 0)}
        placeholder="Padding"
      />
      <input
        type="text"
        value={bg}
        onChange={(e) => setBg(e.target.value)}
        style={{
          color: !isColor(bg) ? 'red' : 'black',
        }}
        placeholder="Background color"
      />
      <h2>Start editing to see some magic happen!</h2>

      <div
        style={{
          width: w,
          height: w,
          border: '1px dashed',
          position: 'relative',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <DannyLogoWithPaddingSvg
          width={w}
          padding={p}
          mode={mode}
          backgroundFill={isColor(bg) ? bg : undefined}
        />
      </div>
    </div>
  )
}

export default Logo
