import { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from '@/features/themeSwitcher'
import { LangSwitcher } from '@/features/langSwitcher'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSidebarItems } from '../../model/selectors/getSidebarItems'
import { type SidebarItemType } from '../../model/types/sidebar'
import cls from './Sidebar.module.scss'

interface SideBarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSidebarItems()

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item: SidebarItemType) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList]
    )

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <aside
                    data-testid='sidebar'
                    className={classNames(cls.SideBarRedesigned, { [cls.collapsedRedesigned]: collapsed }, [className])}
                >
                    <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50}/>
                    <VStack className={cls.items} gap='8' role='navigation'>
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid='sidebar-toggle'
                        className={cls.collapseBtn}
                        Svg={ArrowIcon}
                        onClick={onToggle}
                        clickable
                    >
                    </Icon>
                    <div className={cls.switchers}>
                        <ThemeSwitcher/>
                        <LangSwitcher className={cls.lang} short={collapsed}/>
                    </div>
                </aside>
            }
            off={
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
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher/>
                        <LangSwitcher className={cls.lang} short={collapsed}/>
                    </div>
                </aside>
            }
        />
    )
})
