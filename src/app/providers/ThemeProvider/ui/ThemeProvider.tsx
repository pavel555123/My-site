import React, { useMemo, useState } from 'react'
import { Theme } from '@/shared/const/theme'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    initialTheme?: Theme
    children?: React.ReactNode
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

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
