import { Fragment, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../Button/Button'
import { HStack } from '../Stack/HStack/HStack'

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

type DropdownDirection = 'top' | 'bottom'

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop
}

export function ListBox (props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label
    } = props

    const optionsClasses = [mapDirectionClass[direction]]

    return (
        <HStack gap='4'>
            {label && <span>{label}</span>}
            <HListBox
                className={classNames(cls.ListBox, {}, [className])}
                as='div'
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={cls.trigger}>
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
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled
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
