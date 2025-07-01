import React, { useState } from 'react'
import InstrumentsGrid from './InstrumentsGrid'
import SideElements from './SideElements'

function DrumMachine() {
  const [currentInstrument, setInstrument] = useState('');
  const [currentVolume, setVolume] = useState(1);
  const [power, setPower] = useState(true);
  return (
    <div className="caja-de-ritmos" id="drum-machine">
      <InstrumentsGrid setInstrument={setInstrument} currentVolume={currentVolume} power={power}/>
      <SideElements instrument={currentInstrument} setVolume={setVolume} setPower={setPower} power={power}/>
    </div>
  )
}

export default DrumMachine
