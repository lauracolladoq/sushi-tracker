
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [endGame, setEndGame] = useState(false)
  const [restartGame, setRestartGame] = useState(false)

  useEffect(() => {
    if (endGame) {
      alert(`Game Over, your count is ${count}`)
      setCount(0)
      setEndGame(false)
    }
  }, [endGame])

  useEffect(() => {
    if (restartGame) {
      setCount(0)
      setRestartGame(false)
    }
  })

  function handleIncrementer() {
    setCount((count) => count + 1)
  }

  function handleDecrementer() {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  return (
    <div className="p-5">
      <div className="flex gap-5" >
        <button onClick={handleDecrementer}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        {count}
        <button onClick={handleIncrementer} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
      <button onClick={() => setEndGame(true)} className='bg-black rounded-lg p-2 text-white'>
        End Game
      </button>
      <button onClick={() => setRestartGame(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>
    </div>
  )
}

export default App
