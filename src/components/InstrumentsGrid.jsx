import React from 'react'
import Instrument from './Instrument'

function InstrumentsGrid({setInstrument, currentVolume, power}) {
  return (
    <div className="pad-grid">
      <Instrument id="piano-key" src="sounds/piano.mp3" description="Piano" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>Q</Instrument>
      <Instrument id="guitar" src="sounds/guitar.mp3" description="Guitar" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>W</Instrument>
      <Instrument id="heater-1" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" description="Heater 1" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>E</Instrument>
      <Instrument id="heater-2" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" description="Heater 2" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>A</Instrument>
      <Instrument id="heater-3" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" description="Heater 3" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>S</Instrument>
      <Instrument id="dog-bark" src="sounds/dog-bark.mp3" description="Dog bark" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>D</Instrument>
      <Instrument id="open-hh" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" description="Open HH" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>Z</Instrument>
      <Instrument id="clap" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" description="Clap" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>X</Instrument>
      <Instrument id="cat-meow" src="sounds/meow.mp3" description="Cat meow" setInstrument={setInstrument} currentVolume={currentVolume} power={power}>C</Instrument>
    </div>
    
  )
}

export default InstrumentsGrid
