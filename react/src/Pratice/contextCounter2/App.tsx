import CounertContextProvider, { useCounterHook } from "./CounertContext";
import { ErrorBoundary } from "./ErrorBoundary";

export default function App() {
    return (
        <ErrorBoundary>
            <CounertContextProvider>
                <Display />
                <DisplayBtns />
            </CounertContextProvider>
        </ErrorBoundary>
    )
}

function Display() {
    let [value] = useCounterHook()
    return (
        <div> in app 2
            <br />
            {value}</div>
    )
}


function DisplayBtns() {
    let [v, sV] = useCounterHook()

    return (
        <div>
            <button onClick={() => sV(v + 1)}>inc</button>
            <button onClick={() => sV(v - 1)}>dec</button>
        </div>
    )
}

