import { type LinkProps, NavLink } from 'react-router-dom'
import { ForwardedRef, forwardRef, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
    children?: ReactNode
    activeClassname?: string
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
        className,
        variant = 'primary',
        children,
        to,
        activeClassname = '',
        ...otherProps
    } = props

    return (
        <NavLink to={to}
            className={({ isActive }) => classNames('', { [activeClassname]: isActive }, [className, cls[variant]])}
            {...otherProps}
            ref={ref}
        >
            {children}
        </NavLink>
    )
})

export default AppLink
