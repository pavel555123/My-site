import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import MainIconDeprecated from '@/shared/assets/icons/main.svg'
import AboutIconDeprecated from '@/shared/assets/icons/about.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg'
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/info.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'
import { toggleFeatures } from '@/shared/lib/features'
import { type SidebarItemType } from '../types/sidebar'

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData)

    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated
            })
        },
        {
            path: getRouteAbout(),
            text: 'О нас',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated
            })
        }
    ]
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated
                }),
                authOnly: true
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated
                }),
                authOnly: true
            }
        )
    }
    return sidebarItemsList
}
