import { useEffect } from "react";

const App = () => {

  const handlePressKey = (e) => {
    const audio = document.getElementById(e.key.toUpperCase());
    if (audio) {
      audio.play();
      document.getElementById('display').innerHTML = audio.parentElement.id;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlePressKey);
    return () => {
      document.removeEventListener('keydown', handlePressKey);
    }
  }, []);


  const handleClick = (id) => {
    const audio = document.getElementById(id);
    audio.play();
    document.getElementById('display').innerHTML = audio.parentElement.id;
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="drum-pad-container">
          <div className="drum-pad" id="Heater-1" onClick={() => handleClick('Q')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>Q</div>
          <div className="drum-pad" id="Heater-2" onClick={() => handleClick('W')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>W</div>
          <div className="drum-pad" id="Heater-3" onClick={() => handleClick('E')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>E</div>
          <div className="drum-pad" id="Heater-4" onClick={() => handleClick('A')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>A</div>
          <div className="drum-pad" id="Clap" onClick={() => handleClick('S')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>S</div>
          <div className="drum-pad" id="Open-HH" onClick={() => handleClick('D')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>D</div>
          <div className="drum-pad" id="Kick-n-Hat" onClick={() => handleClick('Z')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>Z</div>
          <div className="drum-pad" id="Kick" onClick={() => handleClick('X')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>X</div>
          <div className="drum-pad" id="Closed-HH" onClick={() => handleClick('C')}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>C</div>
        </div>
        <div id="display"></div>
      </div>
      
    </div>
  );
}

export default App;
