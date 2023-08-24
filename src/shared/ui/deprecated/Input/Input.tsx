import { type InputHTMLAttributes, memo } from 'react'
import { type DefaultTFuncReturn } from 'i18next'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    placeholder?: string | DefaultTFuncReturn
    readonly?: boolean
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div
            className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                className={cls.input}
                type={type}
                value = {value}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    )
})
