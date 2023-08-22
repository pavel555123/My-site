import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Theme } from '../../../const/theme'

interface UseThemeResult {
    theme: Theme
    toggleTheme: (saveAction?: (theme: Theme) => void) => void
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme
        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK
                break
            case Theme.DARK:
                newTheme = Theme.BLUE
                break
            case Theme.BLUE:
                newTheme = Theme.LIGHT
                break
            default:
                newTheme = Theme.BLUE
                break
        }
        setTheme?.(newTheme)
        saveAction?.(newTheme)
    }

    return { theme: theme || Theme.LIGHT, toggleTheme }
}
