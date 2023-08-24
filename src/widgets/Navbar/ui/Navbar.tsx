import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { LoginModal } from '@/features/AuthByUsername'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getUserAuthData } from '@/entities/User'
import { NotificationButton } from '@/features/notificationButton'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { getRouteArticleCreate } from '@/shared/const/router'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import cls from './Navbar.module.scss'

interface NavBarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    if (authData) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<header className={classNames(cls.NavbarRedesigned, {}, [className])}>
                    <HStack className={cls.actions} gap='16'>
                        <NotificationButton/>
                        <AvatarDropdown/>
                    </HStack>
                </header>}
                off={<header className={classNames(cls.Navbar, {}, [className])}>
                    <Text
                        className={cls.appName}
                        title={t('Приложение')}
                        theme={TextTheme.INVERTED}
                    />
                    <AppLink
                        className={cls.createLink}
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.SECONDARY}
                    >
                        {t('Создать статью')}
                    </AppLink>
                    <HStack className={cls.actions} gap='16'>
                        <NotificationButton/>
                        <AvatarDropdown/>
                    </HStack>
                </header>}
            />
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
            )}
        </header>
    )
})
