import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../../model/types/currency'
import { memo, useCallback } from 'react'

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
    const { t } = useTranslation()

    const onChangeHandler = useCallback(() => {
        onChange?.(value as Currency)
    }, [onChange, value])

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
