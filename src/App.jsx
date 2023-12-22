import { useState } from 'react';
import Popap from './components/popap';
import './App.css';

const App = () => {
  
  const [ styleRotate, setStyleRotate ] = useState({})
  const [visibleCarusel, setVisibleCarusel] = useState({})
  const [ prizes, setPrizes ] = useState([
    {
      text: "Скидка 10%",
      color: "hsl(197 30% 43%)",
      isStopSector: false
    },
    { 
      text: "Дизайн в подарок",
      color: "hsl(173 58% 39%)",
      isStopSector: false
    },
    { 
      text: "Второй сайт бесплатно",
      color: "hsl(43 74% 66%)",
      isStopSector: false
    },
    {
      text: "Скидка 50%",
      color: "hsl(27 87% 67%)",
      isStopSector: true
    },
    {
      text: "Блог в подарок",
      color: "hsl(12 76% 61%)",
      isStopSector: false
    },
    {
      text: "Скидок нет",
      color: "hsl(350 60% 52%)",
      isStopSector: false
    },
    {
      text: "Таргет в подарок",
      color: "hsl(91 43% 54%)",
      isStopSector: false
    },
    {
      text: "Скидка 30% на всё",
      color: "hsl(140 36% 74%)",
      isStopSector: false
    }
  ])

  const prizeSlice = 360 / prizes.length
  const prizeOffset = Math.floor(180 / prizes.length)
  const stopSector = 2

  const startRotate = () => {

    let rotateFinish = 2520 + (prizeSlice * (stopSector - 1))
    let rotate = 0

    while (rotate != rotateFinish) {
      rotate += 1
      setTimeout(() => {
        setStyleRotate({ transform: `rotate(${rotate}deg)`, transitionDuration: `5s` })
      }, 10)
    }
  }

  return (
    <div className="caruselFortuna">
      <div class="deal-wheel">
        <div className="rotate" style={styleRotate}>
        <ul class="spinner" style={{ background: `conic-gradient(
    from -90deg,${prizes
      // получаем цвет текущего сектора
      .map((el, i) => `${el.color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
      .reverse()
    })` }}>
          {prizes.map((el, index) => {
            const rotationEl = ((prizeSlice * index) * -1) - prizeOffset
            return (<li key={index} className='prize' style={{ rotate: `${rotationEl}deg`}}>
            <span className="text">{el.text}</span>
          </li>)
          })}
        </ul>
        </div>
        <div class="ticker"></div>
        <button class="btn-spin" onClick={startRotate}>Крутить барабан</button>
      </div>
      <Popap isVisible={visibleCarusel}/>
    </div>
  )

  /*const [styleRotate, setStyleRotate] = useState({}) // стили для вращения барабана
  const [visibleCarusel, setVisibleCarusel] = useState({}) // управление видимостью барабана
  const [visiblePopap, setVisiblePopap] = useState(false) // управление видимостью попапа

  const sectorStop = 3

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
    setTimeout(() => {
      setVisibleCarusel({
        animation: "fadeOutFromNone 3s"
      });
      setVisiblePopap(true);
      setTimeout(() => {
        setVisibleCarusel({
          display: "none"
        });
      }, 2900)
    }, 6000)
  }
  return (
    <div className="App">
      <div className="carusel_wrapper" style={visibleCarusel}>
        <div className="carusel" style={styleRotate}>
          {renderSegments()}
        </div>
        <button onClick={startRotate} className="caruselStartRotate">Крутить барабан !</button>
      </div>
      <Popap isVisible={visiblePopap} />
    </div>
  );*/
}

export default App;