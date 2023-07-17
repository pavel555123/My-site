import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country, CountrySelect } from 'entities/Country'
import { HStack, VStack } from 'shared/ui/Stack'

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCountry?: (country: Country) => void
    onChangeCurrency?: (currency: Currency) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
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

    if (isLoading) {
        return (
            <HStack className={classNames(cls.ProfileCard, {}, [className, cls.loading])} justify='center' max>
                <Loader/>
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack className={classNames(cls.ProfileCard, {}, [className, cls.error])} justify='center' max>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <VStack className={classNames(cls.ProfileCard, mods, [className])} gap='16' max>
            {data?.avatar && (
                <HStack className={cls.avatarWrapper} justify='center' max>
                    <Avatar src={data?.avatar} alt='avatar'/>
                </HStack>
            )}
            <Input
                className={cls.input}
                value={data?.first}
                placeholder={t('Имя')}
                readonly={readonly}
                onChange={onChangeFirstname}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Фамилия')}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
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
            <Input
                className={cls.input}
                value={data?.city}
                placeholder={t('Город')}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                className={cls.input}
                value={data?.username}
                placeholder={t('Имя пользователя')}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <Input
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
}
