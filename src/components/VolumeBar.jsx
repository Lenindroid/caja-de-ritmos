import React, { useRef } from 'react'

function VolumeBar({ setVolume }) {
  const volumeRef = useRef(null);
  function actualizarVolumen() {
    setVolume(volumeRef.current.value);
  }

  return (
    <input type="range" orient="vertical" min="0" max="1" step="0.01" defaultValue={1} onChange={actualizarVolumen} ref={volumeRef}/>
  )
}

export default VolumeBar
