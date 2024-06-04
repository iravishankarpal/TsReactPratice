import React, { ReactNode } from 'react'
import CounerContextProvider, { useCounter } from './CounerContext'

interface state {
    hasError: boolean,
    Error: Error | null
}
interface Props {
    children: ReactNode
}
class ErrorBoundry extends React.Component<Props, state> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, Error: null }
    }
    static getDerivedStateFromError(error: Error): state {
        return { hasError: true, Error: error };
    }
    render(): ReactNode {
        if (this.state.hasError) {
            return <>has Error </>
        }
        return this.props.children;
    }

}

export default function App() {
    return (
        <ErrorBoundry>
            <CounerContextProvider>
                <DisplayCount />
                <BtnDisplay />
            </CounerContextProvider>
        </ErrorBoundry>
    )
}

const BtnDisplay = () => {
    let [value, setValue] = useCounter()
    return <>
        <button onClick={() => setValue(value + 1)}>inc</button>
        <button onClick={() => setValue(value - 1)}>dec</button>
    </>
}
const DisplayCount = () => {
    let [value] = useCounter()
    return <>
        {value}
    </>
}