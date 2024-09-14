import CounterProvider, { useConterHook } from './Counter'
import { ErrorBoundary } from "react-error-boundary";
export default function App() {
    return (
        <div>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <CounterProvider>
                    <Display />
                    <DisplayBtn />
                </CounterProvider>
            </ErrorBoundary>
        </div>
    )
}

const Display = () => {
    let [value] = useConterHook()
    return <>
        {value}
    </>
}

const DisplayBtn = () => {
    let [value, setValue] = useConterHook()
    return <>
        <button onClick={() => setValue(value + 1)}>inc</button>
        <button onClick={() => setValue(value - 1)}>dec</button>
    </>
}