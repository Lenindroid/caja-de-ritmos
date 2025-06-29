import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish } from '@fortawesome/free-solid-svg-icons'

function FishButton() {
  return (
    <button className="fish-button">
      <FontAwesomeIcon icon={faFish} />
    </button>
  )
}

export default FishButton
