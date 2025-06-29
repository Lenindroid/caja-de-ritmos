import React from 'react'
import InstrumentsGrid from './InstrumentsGrid'
import SideElements from './SideElements'

function DrumMachine() {
  return (
    <div id="drum-machine" className="caja-de-ritmos">
      <InstrumentsGrid />
      <SideElements />
    </div>
  )
}

export default DrumMachine
