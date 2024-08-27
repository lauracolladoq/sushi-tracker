import './App.css'
import { Counter } from './components/Counter.jsx'
import { SushiTypeStats } from './components/SushiTypeStats.jsx'


function App() {
  return (
    <div className='m-8'>
      <Counter />
      <SushiTypeStats />
    </div>
  )
}

export default App
