import './App.css'
import { Counter } from './components/Counter.jsx'
import { SushiTypeStats } from './components/SushiTypeStats.jsx'
import { CounterProvider } from './contexts/CounterContext.jsx'


function App() {
  return (
    <CounterProvider>
      <div className='m-8'>
        <Counter />
        <SushiTypeStats />
      </div>
    </CounterProvider>
  )
}

export default App
