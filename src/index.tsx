import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate'
import '@/app/styles/index.scss'
import '@/shared/config/i18n/i18n'
import App from './app/App'

const root = createRoot(document.getElementById('root')!)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App/>
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
export { Theme } from '@/shared/const/theme'
