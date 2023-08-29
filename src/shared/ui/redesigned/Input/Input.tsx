import { type InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react'
import { DefaultTFuncReturn } from 'i18next'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { HStack } from '../Stack'
import { Text } from '../Text'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder' | 'readOnly' | 'size'>

type InputSize = 's' | 'm' | 'l'

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    label?: string | DefaultTFuncReturn
    size?: InputSize
    onChange?: (value: string) => void
    placeholder?: string | DefaultTFuncReturn
    autofocus?: boolean
    readonly?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        label,
        size = 'm',
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight)
    }

    const input = (
        <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                className={cls.input}
                type={type}
                value = {value}
                onChange={onChangeHandler}
                readOnly={readonly}
                placeholder={placeholder as string}
                onFocus={onFocus}
                onBlur={onBlur}
                {...otherProps}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    )

    if (label) {
        return (
            <HStack gap='8' max>
                <Text text={label}/>
                {input}
            </HStack>
        )
    }

    return input
})
