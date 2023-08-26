import { Fragment, type ReactNode, useMemo } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type DropdownDirection } from '@/shared/types/ui'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import { Icon } from '../../../Icon'
import { HStack } from '../../../../redesigned/Stack'
import { Button } from '../../../Button/Button'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'
import cls from './ListBox.module.scss'

export interface ListBoxItem<T extends string> {
    value: T
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    className?: string
    items?: Array<ListBoxItem<T>>
    value?: T
    defaultValue?: string
    onChange: (value: T) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

export function ListBox<T extends string> (props: ListBoxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label
    } = props

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu]

    const selectedItem = useMemo(() => {
        return items?.find(item => item.value === value)
    }, [items, value])

    return (
        <HStack gap='4'>
            {label && <span>{label}</span>}
            <HListBox
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                as='div'
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={classNames(cls.trigger, { [cls.hidden]: readonly })} as='div'>
                    <Button variant='filled' addonRight={<Icon Svg={ArrowIcon}/>} disabled={readonly}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                            [popupCls.selected]: selected
                                        }
                                    )}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
}
