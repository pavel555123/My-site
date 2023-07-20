import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Fragment, type ReactNode } from 'react'
import { type DropdownDirection } from 'shared/types/ui'
import AppLink from '../../../AppLink/AppLink'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
    content?: ReactNode
    href?: string
    onClick?: () => void
    disabled?: boolean
}

interface DropdownProps {
    className?: string
    items?: DropdownItem[]
    trigger: ReactNode
    direction?: DropdownDirection
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
        <Menu className={classNames(cls.Dropdown, {}, [className, popupCls.popup])} as='div'>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items?.map(item => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            className={classNames(cls.item, { [popupCls.active]: active })}
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
