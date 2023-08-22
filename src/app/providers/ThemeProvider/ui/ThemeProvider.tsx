import { ReactNode, useEffect, useMemo, useState } from 'react'
import { Theme } from '@/shared/const/theme'
import { useJsonSettings } from '@/entities/User'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'

interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings()

    const [isThemeInit, setIsThemeInit] = useState(false)

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    useEffect(() => {
        if (!isThemeInit) {
            setTheme(defaultTheme)
            setIsThemeInit(true)
        }
    }, [defaultTheme, isThemeInit])

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    document.body.className = theme

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
