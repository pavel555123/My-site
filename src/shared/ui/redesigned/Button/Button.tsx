import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export type ButtonVariant = 'clear' | 'outline'

export type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    square?: boolean
    size?: ButtonSize
    children?: ReactNode
    disabled?: boolean
    fullWidth?: boolean
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = 'outline',
        square,
        size = 'm',
        children,
        disabled,
        fullWidth,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    )
})
