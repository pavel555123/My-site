import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import ThemeIcon from '@/shared/assets/icons/theme-light.svg'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/deprecated/Icon'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { theme, toggleTheme } = useTheme()
    const dispatch = useAppDispatch()

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }))
        })
    }, [dispatch, toggleTheme])

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}
        >
            <Icon Svg={ThemeIcon} width={40} height={40} inverted/>
        </Button>
    )
})
