import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
          +1 
        </button>
        {count}
        <button onClick = {() => setCount((count) => count - 1)}>
          -1
        </button>
        <button onClick = {() => setCount(0)}>
          New Game
        </button>
      </div>
    </>
  )
}

export default App
