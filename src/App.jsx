import { useState } from 'react';
import Popap from './components/popap';
import './App.css';

const App = () => {

  const [styleRotate, setStyleRotate] = useState({})

  const sectorStop = 1

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

    for (let i = 0; i < countSegments; i++) {
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

    let min = 360

    let rotateFinish = 1080 + 90 - ((sectorStop - 1) * 45)
    let rotate = 0

    while (rotate != rotateFinish) {
      rotate += 1
      setTimeout(() => {
        setStyleRotate({ transform: `rotate(${rotate}deg)`, transitionDuration: `5s` })
      }, 10)
    }
  }

  return (
    <div className="App">
      <Popap className="app_popap" />
      <div className="carusel" style={styleRotate}>
        {renderSegments()}
      </div>
      <button onClick={startRotate} className="caruselStartRotate">Крутить барабан !</button>
    </div>
  );
}

export default App;