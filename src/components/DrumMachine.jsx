import React, { useState } from 'react'
import InstrumentsGrid from './InstrumentsGrid'
import SideElements from './SideElements'

function DrumMachine() {
  const [currentInstrument, setInstrument] = useState('');
  const [currentVolume, setVolume] = useState(1);
  return (
    <div className="caja-de-ritmos" id="drum-machine">
      <InstrumentsGrid setInstrument={setInstrument} currentVolume={currentVolume}/>
      <SideElements instrument={currentInstrument} setVolume={setVolume}/>
    </div>
  )
}

export default DrumMachine
