import { Link, type LinkProps } from 'react-router-dom'
import { memo, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

export const AppLink = memo(({ className, theme = AppLinkTheme.PRIMARY, children, to, ...otherProps }: AppLinkProps) => {
    return (
        <Link to={to}
            className={classNames('', {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})

export default AppLink
