import React, { ReactNode, createContext, useContext, useState } from "react"

// creating context with inteface
interface ContextInterface {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}
let CounterContext = createContext<ContextInterface | undefined>(undefined)

// creating priver with interface
export default function CounertContextProvider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState<number>(0)
    return (
        <CounterContext.Provider value={{ value, setValue }}>
            {children}
        </CounterContext.Provider>
    )
}


// use method to add for call one true value 
export const useCounterHook = () => {
    let counterContextValue = useContext(CounterContext)
    if (!counterContextValue) {
        throw new Error("Counter context out side of provider")
    }
    return [counterContextValue.value, counterContextValue.setValue] as const
}