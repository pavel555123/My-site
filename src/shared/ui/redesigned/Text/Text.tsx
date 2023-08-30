import { memo } from 'react'
import { type DefaultTFuncReturn } from 'i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export type TextVariant = 'primary' | 'accent' | 'error'

export type TextAlign = 'right' | 'left' | 'center'

export type TextSize = 's' | 'm' | 'l'

interface TextProps {
    className?: string
    title?: string | DefaultTFuncReturn
    text?: string | DefaultTFuncReturn
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
    bold?: boolean
    'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1'
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        'data-testid': dataTestId = 'Text'
    } = props

    const HeaderTag = mapSizeToHeaderTag[size]
    const sizeClass = mapSizeToClass[size]

    const additionalClasses = [className, cls[variant], cls[align], cls[size], sizeClass]

    return (
        <div className={classNames(cls.Text, { [cls.bold]: bold }, additionalClasses)}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    )
})
