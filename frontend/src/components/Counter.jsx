import { useEffect, useState, useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

export function Counter() {
    const { globalCount, incrementGlobalCount, decrementGlobalCount, resetCounters } = useContext(CounterContext);
    const [endGame, setEndGame] = useState(false)
    const [restartGame, setRestartGame] = useState(false)

    useEffect(() => {
        if (endGame) {
            alert(`Game Over, your count is ${globalCount}`)
            resetCounters()
            setEndGame(false)
        }
    }, [endGame, globalCount, resetCounters])

    useEffect(() => {
        if (restartGame) {
            resetCounters()
            setRestartGame(false)
        }
    }, [restartGame, resetCounters])

    return (
        <div className='md:w-1/2 m-auto'>
            <h1 className="text-4xl font-bold text-center">SUSHI COUNTER</h1>
            {/* Icons */}
            <div className='flex gap-3 justify-end mt-4'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                </button>
                <button onClick={() => setRestartGame(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
            </div>
            {/* Counter */}
            <div className="flex gap-5 mt-4 border rounded-xl justify-center py-4" >
                <button onClick={decrementGlobalCount}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 bg-salmon bg-opacity-70 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>
                <span className='font-bold text-9xl'>{globalCount}</span>
                <button onClick={incrementGlobalCount} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 bg-salmon bg-opacity-70 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            {/* End Game Button */}
            <button onClick={() => setEndGame(true)} className='bg-black rounded-xl py-3 mt-4 text-white font-medium w-full'>
                End Game!
            </button>
        </div>
    )
}