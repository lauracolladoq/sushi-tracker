import './App.css'
import { Counter } from './components/Counter.jsx'
import { SushiTypeStats } from './components/SushiTypeStats.jsx'
import { CounterProvider } from './contexts/CounterContext.jsx'
import {Menu} from './components/Menu.jsx'

function App() {
  return (
    <CounterProvider className="dark:bg-gray-900">
        <Counter />
        <SushiTypeStats />
      <Menu/>
    </CounterProvider>
  )
}

export default App
