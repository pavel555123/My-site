import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/Popups'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Country } from '../../model/types/country'

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

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            className={classNames('', {}, [className])}
            value={value}
            defaultValue='Укажите страну'
            label='Укажите страну'
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction='top right'
        />
    )
})
