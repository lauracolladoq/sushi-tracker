/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from 'react';
import { CounterContext } from '../contexts/CounterContext';

export function TypeSushiCounter({ name, img }) {
    const [count, setCount] = useState(0);
    const { incrementGlobalCount, decrementGlobalCount, reset, clearReset } = useContext(CounterContext);

    // Resetea el contador de un tipo de sushi cuando se resetean todos los contadores
    useEffect(() => {
        if (reset) {
            setCount(0);
            // Limpia el estado de reset
            clearReset();
        }
    }, [reset, clearReset]);

    const handleIncrementer = () => {
        setCount(count + 1);
        incrementGlobalCount();
    }

    const handleDecrementer = () => {
        if (count > 0){
            decrementGlobalCount();
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div className="flex flex-col justify-center p-1">
                <p className="text-center">{name}</p>
                <div className="flex justify-center items-center gap-3">
                    <button onClick={handleDecrementer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 bg-black dark:bg-white dark:text-black text-white rounded-full"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </button>
                    <img src={img} alt={`${name} image`} className="w-16 h-16 object-contain" />
                    <button onClick={handleIncrementer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 bg-black text-white  dark:bg-white dark:text-black rounded-full"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </button>
                </div>
                <p className="text-center text-gray-500">{count}</p>
            </div>
        </div>
    );
}