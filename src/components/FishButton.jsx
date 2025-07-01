import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish } from '@fortawesome/free-solid-svg-icons'

function FishButton({ setPower, power }) {
  const fishButton = useRef(null)
  function actualizarPower() {
    setPower(!power);
  }

  return (
    <button className="fish-button" onClick={actualizarPower} ref={fishButton} style={{ color: power ? '#00A1EC' : '#0037EC' }}>
      <FontAwesomeIcon icon={faFish}/>
    </button>
  )
}

export default FishButton
