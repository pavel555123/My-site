import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { type SidebarItemType } from '../../model/types/sidebar'
import cls from './Sidebar.module.scss'

interface SideBarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <aside
            data-testid='sidebar'
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid='sidebar-toggle'
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack className={cls.items} gap='8' role='navigation'>
                {sidebarItemsList.map((item: SidebarItemType) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang} short={collapsed}/>
            </div>
        </aside>
    )
})
