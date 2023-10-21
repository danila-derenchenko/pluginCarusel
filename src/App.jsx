import { useState } from 'react';
import './App.css';

const App = () => {

  const [ styleRotate, setStyleRotate ] = useState({})

  const getRandomColorValue = () => {
    var colorValue = Math.floor(Math.random() * 256).toString(16);
    return colorValue.length == 1 ? "0" + colorValue : colorValue;
  }
  
  const generateRandomColorCode = () => {
    var red = getRandomColorValue();
    var green = getRandomColorValue();
    var blue = getRandomColorValue();
  
    return "#" + red + green + blue;
  }

  const renderSegments = () => {
    const countSegments = 8
    const segments = []
    let rotateSegment = 0;

    for(let i = 0; i < countSegments; i++) {
      const styleSegment = {
        backgroundColor: generateRandomColorCode(),
        transform: `rotate(${rotateSegment}deg)`
      }

      rotateSegment += 45

      segments.push(<div style={styleSegment} className='segment'>{i + 1}</div>)
    }

    return segments
  }

  const startRotate = () => {
    let rotate = 0
    while(rotate != 560) {
      rotate += 1
      setTimeout(() => {
        setStyleRotate({ transform: `rotate(${rotate}deg)`, transitionDuration: `5s` })
      }, 50)
    }
  }

  return (
    <div className="App">
      <div className="carusel" style={styleRotate}>
        {renderSegments()}
      </div>
      <button onSubmit={(evt) => evt.preventDefault} onClick={startRotate} className="caruselStartRotate">Крутить барабан! </button>
    </div>
  );
}

export default App;