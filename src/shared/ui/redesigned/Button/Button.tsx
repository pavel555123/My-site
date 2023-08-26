import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export type ButtonVariant = 'clear' | 'outline' | 'filled'

export type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    square?: boolean
    size?: ButtonSize
    children?: ReactNode
    disabled?: boolean
    fullWidth?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
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
        addonLeft,
        addonRight,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight)
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    )
})
