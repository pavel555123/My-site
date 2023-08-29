import { memo, useCallback } from 'react'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'
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

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    const props = {
        className,
        value,
        defaultValue: 'Укажите страну',
        label: 'Укажите страну',
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
