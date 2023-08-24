import { Fragment, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type DropdownDirection } from '@/shared/types/ui'
import { HStack } from '../../../../redesigned/Stack/HStack/HStack'
import { Button } from '../../../Button/Button'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'
import cls from './ListBox.module.scss'

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    className?: string
    items?: ListBoxItem[]
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

export function ListBox (props: ListBoxProps) {
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
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
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
                                            [popupCls.disabled]: item.disabled
                                        }
                                    )}
                                >
                                    {selected && '!!!'}
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
