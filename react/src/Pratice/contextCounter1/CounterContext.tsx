import { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";

interface CounterContextType {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

type Props = {
  children: ReactNode
}

export function useCounterContext() {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error("Component out side of Counter Context provider")
  }

  let { value, setValue } = context

  return [value, setValue] as const
}

export default function CounterContextProvider({ children }: Props) {
  const [value, setValue] = useState<number>(0);
  return (
    <>
      <CounterContext.Provider value={{ value, setValue }}>{children}</CounterContext.Provider>
    </>
  );
}
