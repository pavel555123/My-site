import { type HTMLAttributes, type ReactNode, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'light' | 'outlined'
export type CardPadding = '0' | '8' | '16' | '24'
export type CardBorder = 'usual' | 'round'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    variant?: CardVariant
    max?: boolean
    padding?: CardPadding
    border?: CardBorder
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'gap_0',
    8: 'gap_8',
    16: 'gap_16',
    24: 'gap_24'
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        padding = '8',
        border = 'usual',
        ...otherProps
    } = props

    const paddingClass = mapPaddingToClass[padding]

    return (
        <div className={classNames(
            cls.Card,
            { [cls.max]: max },
            [className, cls[variant], cls[paddingClass], cls[border]]
        )}
        {...otherProps}
        >
            {children}
        </div>
    )
})
