import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'
import { type DefaultTFuncReturn } from 'i18next'

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface TextProps {
    className?: string
    title?: string | DefaultTFuncReturn
    text?: string | DefaultTFuncReturn
    theme?: TextTheme
    align?: TextAlign
    size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
