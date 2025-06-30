import React, { useEffect, useRef } from 'react'

function Instrument({ children, id, src, description, setInstrument }) {
  const audioRef = useRef(null);
  const buttonRef = useRef(null);

  function playInstrument() {
    if(audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setInstrument(description);
    }
  }

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key.toUpperCase() === children.toUpperCase()) {
        buttonRef.current.style.backgroundColor = "#0037EC";
        playInstrument();
      }
    }

    function handleKeyUnpress(e) {
      if (e.key.toUpperCase() === children.toUpperCase()) {
        buttonRef.current.style.backgroundColor = "";
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUnpress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyUnpress);
    };
  }, [children]);

  return (
    <button className="drum-pad" id={id} onClick={playInstrument} ref={buttonRef}>
      {children}
      <audio ref={audioRef} src={src} id={children} className="clip"></audio>
    </button>
  )
}

export default Instrument
