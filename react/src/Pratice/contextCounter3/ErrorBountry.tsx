import React, { ReactNode } from "react"
interface propsType {
    children: ReactNode
}
interface propsState {
    hasError: boolean,
    Error: Error | null
}
class ErrorBoundary extends React.Component<propsType, propsState> {
    constructor(props: propsType) {
        super(props)
        this.state = { hasError: false, Error: null }
    }
    static getDrivedStateFromError(Error: Error): propsState {
        return { hasError: true, Error }
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <>some erorr Accured</>
        }
        return this.props.children;
    }
}

export default ErrorBoundary