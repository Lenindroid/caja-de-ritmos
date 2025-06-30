import React from 'react'

function Instrument({ children }) {
  return (
    <button className="drum-pad">
      {children}
    </button>
  )
}

export default Instrument
