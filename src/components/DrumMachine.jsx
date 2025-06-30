import React, { useState } from 'react'
import InstrumentsGrid from './InstrumentsGrid'
import SideElements from './SideElements'

function DrumMachine() {
  const [currentInstrument, setInstrument] = useState('');
  return (
    <div className="caja-de-ritmos" id="drum-machine">
      <InstrumentsGrid setInstrument={setInstrument}/>
      <SideElements instrument={currentInstrument}/>
    </div>
  )
}

export default DrumMachine
