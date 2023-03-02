import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { type InputHTMLAttributes, memo } from 'react'
import { type DefaultTFuncReturn } from 'i18next'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    placeholder?: string | DefaultTFuncReturn
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div
            className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {placeholder}
                </div>
            )}
            <input
                type={type}
                value = {value}
                onChange={onChangeHandler}
                className={cls.input}
                {...otherProps}
            />
        </div>
    )
})
