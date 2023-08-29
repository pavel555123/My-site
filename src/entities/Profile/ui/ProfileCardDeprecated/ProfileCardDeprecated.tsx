import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { CurrencySelect } from '@/entities/Currency'
import { CountrySelect } from '@/entities/Country'
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader'
import { Text as TextDeprecated, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'
import cls from './ProfileCardDeprecated.module.scss'

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            className={classNames(cls.ProfileCard, {}, [cls.loading])}
            justify='center'
            max
        >
            <LoaderDeprecated/>
        </HStack>
    )
}

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile')

    return (
        <HStack
            className={classNames(cls.ProfileCard, {}, [cls.error])}
            justify='center'
            max
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
    )
}

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency
    } = props
    const { t } = useTranslation('profile')

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <VStack className={classNames(cls.ProfileCard, mods, [className])} gap='16' max>
            {data?.avatar && (
                <HStack className={cls.avatarWrapper} justify='center' max>
                    <AvatarDeprecated src={data?.avatar} alt='avatar'/>
                </HStack>
            )}
            <InputDeprecated
                className={cls.input}
                value={data?.first}
                placeholder={t('Имя')}
                readonly={readonly}
                onChange={onChangeFirstname}
                data-testid={'ProfileCard.firstname'}
            />
            <InputDeprecated
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Фамилия')}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid={'ProfileCard.lastname'}
            />
            <InputDeprecated
                className={cls.input}
                value={data?.age}
                placeholder={t('Возраст')}
                readonly={readonly}
                onChange={onChangeAge}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault()
                    }
                }}
            />
            <InputDeprecated
                className={cls.input}
                value={data?.city}
                placeholder={t('Город')}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <InputDeprecated
                className={cls.input}
                value={data?.username}
                placeholder={t('Имя пользователя')}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <InputDeprecated
                className={cls.input}
                value={data?.avatar}
                placeholder={t('Аватар')}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    )
})
