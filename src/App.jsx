import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const cardRef = useRef()
  const handleClickAnimetion = (prevVal, currVal) => {
    cardRef.current.style.transform = currVal > prevVal ? 'translateY(-100%)' : 'translateY(100%)'
    cardRef.current.style.opacity = 0

    setTimeout(() => {
      cardRef.current.style.transitionDuration = '0s'
      cardRef.current.style.transform = currVal > prevVal ? 'translateY(100%)' : 'translateY(-100%)'
      cardRef.current.style.opacity = 0

      setTimeout(() => {
        cardRef.current.style.transitionDuration = '0.3s'
        cardRef.current.style.transform = 'translateY(0)'
        cardRef.current.style.opacity = 1
      }, 20)
    }, 250)
  }
  return (
    <div className='container'>
      <button
        className='btn'
        onClick={() => setCount((count) => {
          let newCount = (count <= 1) ? count : count - 1
          handleClickAnimetion(count, newCount)
          return newCount
        })}>
        −
      </button>
      <div className="card" >
        <p ref={cardRef}>{count}</p>
      </div>
      <button
        className='btn'
        onClick={() => setCount((count) => {
          let newCount = (count == 99) ? count : count + 1
          handleClickAnimetion(count, newCount)
          return newCount
        })}>
        +
      </button>
    </div>
  )
}

export default App
