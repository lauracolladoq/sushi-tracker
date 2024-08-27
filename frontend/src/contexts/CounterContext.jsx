/* eslint-disable react/prop-types */
import {createContext, useState} from "react";

// Crear el contexto
export const CounterContext = createContext();

// Crear el provider
export function CounterProvider({ children }) {

    // Crear el estado global
    const [globalCount, setGlobalCount] = useState(0);

    // Crear las funciones para modificar el estado global
    const incrementGlobalCount = () => setGlobalCount(globalCount + 1);
    const decrementGlobalCount = () => setGlobalCount(globalCount > 0 ? globalCount - 1 : 0);

    // Pasar el estado global y las funciones a los componentes hijos
    return (
        <CounterContext.Provider value={{ globalCount, incrementGlobalCount, decrementGlobalCount, setGlobalCount }}>
            {children}
        </CounterContext.Provider>
    );
}