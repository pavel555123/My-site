import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getUserAuthData } from '@/entities/User'
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { type SidebarItemType } from '../../model/types/sidebar'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <AppLink
                    className={classNames(cls.itemRedesigned, { [cls.collapsedRedesigned]: collapsed })}
                    activeClassname={cls.active}
                    to={item.path}
                >
                    <Icon Svg={item.Icon}/>
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    className={classNames(cls.item, { [cls.collapsed]: collapsed })}
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                >
                    <item.Icon className={cls.icon}/>
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
        />
    )
})
