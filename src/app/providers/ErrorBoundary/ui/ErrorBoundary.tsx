import React, { type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from '@/widgets/PageError'

interface ErrorBoundaryProps {
    children?: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError () {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo)
    }

    render () {
        const { children } = this.props
        const { hasError } = this.state

        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return <Suspense><PageError/></Suspense>
        }

        return children
    }
}

export default ErrorBoundary
