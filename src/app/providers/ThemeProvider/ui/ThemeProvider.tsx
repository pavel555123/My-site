import { ReactNode, useEffect, useMemo, useState } from 'react'
import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'

interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [isThemeInit, setIsThemeInit] = useState(false)

    const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme || Theme.LIGHT)

    useEffect(() => {
        if (!isThemeInit && initialTheme) {
            setTheme(initialTheme)
            setIsThemeInit(true)
        }
    }, [initialTheme, isThemeInit, theme])

    useEffect(() => {
        document.body.className = theme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }, [theme])

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
