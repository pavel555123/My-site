import { Link, type LinkProps } from 'react-router-dom'
import { ForwardedRef, forwardRef, type ReactNode } from 'react'
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

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        to,
        ...otherProps
    } = props

    return (
        <Link to={to}
            className={classNames('', {}, [className, cls[theme]])}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Link>
    )
})

export default AppLink
