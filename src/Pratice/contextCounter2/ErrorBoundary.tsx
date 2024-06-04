import React, { ReactNode } from "react";
export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null
}
export interface ErrorBoundaryProps {
    children: ReactNode
}
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error: error };
    }
    render(): ReactNode {
        if (this.state.hasError) {
            return <div>
                <div>
                    An Error Message  <b>{this.state.error?.message}</b>
                </div>
                <br />
                <div>
                    An Error name <b> {this.state.error?.name}</b>
                </div>
                {/* An Error stack {this.state.error?.stack} */}
            </div>;
        }
        return this.props.children;
    }
}
