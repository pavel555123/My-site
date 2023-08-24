import { type LinkProps, NavLink } from 'react-router-dom'
import { memo, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
    children?: ReactNode
    activeClassname?: string
}

export const AppLink = memo((props: AppLinkProps) => {
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
        >
            {children}
        </NavLink>
    )
})

export default AppLink
