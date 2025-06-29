import React from 'react'
import FishButton from './FishButton'
import VolumeBar from './VolumeBar'
import Action from './Action'

function SideElements() {
  return (
    <div className="controlers">
      <h1>SHARK DJ</h1>
      <FishButton />
      <VolumeBar />
      <Action />
    </div>
  )
}

export default SideElements
