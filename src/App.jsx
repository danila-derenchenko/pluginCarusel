import { useState } from 'react';
import './App.css';

const App = () => {

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

  return (
    <div className="App">
      <div className="carusel">
        {renderSegments()}
      </div>
    </div>
  );
}

export default App;