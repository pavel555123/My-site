import { classNames } from 'shared/lib/classNames/classNames'
import { Currency } from '../../model/types/currency'
import { memo, useCallback } from 'react'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <ListBox
            className={classNames('', {}, [className])}
            value={value}
            defaultValue='Укажите валюту'
            label='Укажите валюту'
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction='top right'
        />
    )
})
