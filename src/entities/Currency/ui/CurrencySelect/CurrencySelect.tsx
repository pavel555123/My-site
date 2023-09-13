import { memo, useCallback } from 'react'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { ToggleFeatures } from '@/shared/lib/features'
import { Currency } from '../../model/types/currency'

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

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    const props = {
        className,
        value,
        defaultValue: 'Укажите валюту',
        label: 'Укажите валюту',
        items: options,
        onChange: onChangeHandler,
        readonly,
        direction: 'top right' as const
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <ListBox {...props}/>
            }
            off={
                <ListBoxDeprecated {...props}/>
            }
        />
    )
})
