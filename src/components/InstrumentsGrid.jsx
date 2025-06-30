import React from 'react'
import Instrument from './Instrument'

function InstrumentsGrid({setInstrument}) {
  return (
    <div className="pad-grid">
      <Instrument id="piano-key" src="/sounds/piano.mp3" description="Piano" setInstrument={setInstrument}>Q</Instrument>
      <Instrument id="guitar" src="/sounds/guitar.mp3" description="Guitar" setInstrument={setInstrument}>W</Instrument>
      <Instrument id="heater-1" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" description="Heater 1" setInstrument={setInstrument}>E</Instrument>
      <Instrument id="heater-2" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" description="Heater 2" setInstrument={setInstrument}>A</Instrument>
      <Instrument id="heater-3" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" description="Heater 3" setInstrument={setInstrument}>S</Instrument>
      <Instrument id="dog-bark" src="/sounds/dog-bark.mp3" description="Dog bark" setInstrument={setInstrument}>D</Instrument>
      <Instrument id="open-hh" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" description="Open HH" setInstrument={setInstrument}>Z</Instrument>
      <Instrument id="clap" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" description="Clap" setInstrument={setInstrument}>X</Instrument>
      <Instrument id="cat-meow" src="sounds/meow.mp3" description="Cat meow" setInstrument={setInstrument}>C</Instrument>
    </div>
    
  )
}

export default InstrumentsGrid
