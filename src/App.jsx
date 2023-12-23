import { useState } from 'react';
import Popap from './components/popap';
import './App.css';

const App = () => {
  
  const [ styleRotate, setStyleRotate ] = useState({})
  const [ visibleCarusel, setVisibleCarusel ] = useState({})
  const [ visiblePopap, setVisiblePopap ] = useState(false)
  const [ visibleButton, setVisibleButton ] = useState({})
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
  const stopSector = 3

  const startRotate = () => {

    setVisibleButton({ display: 'none' })

    const rotateFinish = 2520 + (prizeSlice * (stopSector - 1))
    let rotate = 0
    const timeToStop = 6000

    while (rotate != rotateFinish) {
      rotate += 1
      setTimeout(() => {
        setStyleRotate({ transform: `rotate(${rotate}deg)`, transitionDuration: `5s` })
      }, 10)
    }
    setTimeout(() => {
      setVisibleCarusel({ animation: 'fadeOutFromNone 2s' })
      setTimeout(() => {
        setVisibleCarusel({ display: 'none' })
        setVisiblePopap(true)
      }, 1900)
    }, timeToStop)
  }

  return (
    <div className="caruselFortuna">
      <div className="deal-wheel" style={visibleCarusel}>
        <div className="rotate" style={styleRotate}>
        <ul className="spinner" style={{ background: `conic-gradient(from -90deg,${prizes
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
        <div className="ticker"></div>
        <button className="btn-spin" onClick={startRotate} style={visibleButton}>Крутить барабан</button>
      </div>
      <Popap isVisible={visiblePopap}/>
    </div>
  )
}

export default App;