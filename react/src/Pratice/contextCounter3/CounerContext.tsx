import React, { ReactNode, createContext, useContext, useState } from "react"

type Props = {
    children: ReactNode
}
interface creaseContextType {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}
const CounterContext = createContext<creaseContextType | undefined>(undefined)
export default function CounerContextProvider({ children }: Props) {
    const [value, setValue] = useState(0)
    return (
        <CounterContext.Provider value={{ value, setValue }}>
            {children}
        </CounterContext.Provider>
    )
}
export function useCounter() {
    const res = useContext(CounterContext)
    if (!res) {
        throw new Error("Out of context")
    }
    return [res.value, res.setValue] as const
}