import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [endGame, setEndGame] = useState(false)

  useEffect(() => {
    if (endGame) {
      alert('Game Over, your count is ${count}')
      setCount(0)
    }
  }, [endGame])

  function handleIncrementer() {
    setCount((count) => count + 1)
  }

  function handleDecrementer() {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  return (
    <>
      <div className="counter">
        <button onClick={handleIncrementer}>
          +1
        </button>
        {count}
        <button onClick={handleDecrementer}>
          -1
        </button>
        <button onClick={setEndGame(true)}>
          End Game
        </button>
      </div>
    </>
  )
}

export default App
