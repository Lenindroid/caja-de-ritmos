import React from 'react'
import FishButton from './FishButton'
import VolumeBar from './VolumeBar'
import Action from './Action'

function SideElements({ instrument, setVolume, setPower, power }) {
  return (
    <div className="controlers">
      <h1>SHARK DJ</h1>
      <FishButton setPower={setPower} power={power}/>
      <VolumeBar setVolume={setVolume}/>
      <Action instrument={instrument}/>
    </div>
  )
}

export default SideElements
