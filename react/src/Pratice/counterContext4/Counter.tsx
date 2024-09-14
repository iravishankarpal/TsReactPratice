import React, { ReactNode, createContext, useContext, useState } from 'react'

interface counterInterface {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}

let counterContext = createContext<counterInterface | undefined>(undefined)

export default function CounterProvider({ children }: { children: ReactNode }) {
    let [value, setValue] = useState(0)
    return (
        <counterContext.Provider value={{ value, setValue }}>{children}</counterContext.Provider>
    )
}

export const useConterHook = () => {
    let Context = useContext(counterContext)
    if (!Context) {
        throw new Error("Out of context")
    }
    return [Context.value, Context.setValue] as const
}