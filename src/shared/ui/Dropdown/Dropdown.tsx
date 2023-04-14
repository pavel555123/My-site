import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Fragment, type ReactNode } from 'react'
import { type DropdownDirection } from 'shared/types/ui'
import AppLink from '../AppLink/AppLink'

export interface DropdownItem {
    content?: ReactNode
    href?: string
    onClick?: () => void
    disabled?: boolean
}

interface DropdownProps {
    className?: string
    items?: DropdownItem[]
    trigger?: ReactNode
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom right': cls.optionsBottomRight,
    'bottom left': cls.optionsBottomLeft,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft
}

export function Dropdown (props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right'
    } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <Menu className={classNames(cls.Dropdown, {}, [className])} as='div'>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items?.map(item => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            className={classNames(cls.item, { [cls.active]: active })}
                            type='button'
                            onClick={item.onClick}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={item.href}>
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={item.href}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
