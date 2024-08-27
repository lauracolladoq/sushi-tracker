import './App.css'
import { Counter } from './components/Counter.jsx'
import { SushiTypeStats } from './components/SushiTypeStats.jsx'
import { CounterProvider } from './contexts/CounterContext.jsx'
import {Menu} from './components/Menu.jsx'


function App() {
  return (
    <CounterProvider>
      <div className='m-8'>
        <Counter />
        <SushiTypeStats />
      </div>
      <Menu/>
    </CounterProvider>
  )
}

export default App
