import { Menu } from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type DropdownDirection } from '@/shared/types/ui'
import AppLink from '../../../AppLink/AppLink'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'
import cls from './Dropdown.module.scss'

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

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
            <Menu.Button className={popupCls.trigger} as='div'>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items?.map((item, index) => {
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
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={`dropdown-key-${index}`}>
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={`dropdown-key-${index}`}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
