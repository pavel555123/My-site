import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../../model/types/country'
import { memo, useCallback } from 'react'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (country: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
    { value: Country.China, content: Country.China }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback(() => {
        onChange?.(value as Country)
    }, [onChange, value])

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )
})
