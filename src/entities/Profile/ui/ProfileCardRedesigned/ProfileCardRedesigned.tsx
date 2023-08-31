import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Input } from '@/shared/ui/redesigned/Input'
import { CurrencySelect } from '@/entities/Currency'
import { CountrySelect } from '@/entities/Country'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding='24' max>
            <VStack gap='32'>
                <HStack justify='center' max>
                    <Skeleton width={128} height={128} border='100%'/>
                </HStack>
                <HStack gap='32' max>
                    <VStack gap='16' max>
                        <Skeleton width='100%' height={38}/>
                        <Skeleton width='100%' height={38}/>
                        <Skeleton width='100%' height={38}/>
                        <Skeleton width='100%' height={38}/>
                    </VStack>
                    <VStack gap='16' max>
                        <Skeleton width='100%' height={38}/>
                        <Skeleton width='100%' height={38}/>
                        <Skeleton width='100%' height={38}/>
                        <Skeleton width='100%' height={38}/>
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    )
}

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile')

    return (
        <HStack
            justify='center'
            max
        >
            <Text
                variant='error'
                title={t('Произошла ошибка при загрузке')}
                text={t('Попробуйте обновить страницу')}
                align='center'
            />
        </HStack>
    )
}

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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
    const { t } = useTranslation()

    return (
        <Card
            className={className}
            padding='24'
            border='partial'
            max
        >
            <VStack gap='32'>
                {data?.avatar && (
                    <HStack justify='center' max>
                        <Avatar src={data?.avatar} size={120} alt='avatar'/>
                    </HStack>
                )}
                <HStack gap='24' max>
                    <VStack gap='16' max>
                        <Input
                            value={data?.first}
                            label={t('Имя')}
                            readonly={readonly}
                            onChange={onChangeFirstname}
                            data-testid={'ProfileCard.firstname'}
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            readonly={readonly}
                            onChange={onChangeLastname}
                            data-testid={'ProfileCard.lastname'}
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            readonly={readonly}
                            onChange={onChangeAge}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault()
                                }
                            }}
                        />
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            readonly={readonly}
                            onChange={onChangeCity}
                        />
                    </VStack>
                    <VStack gap='16' max>
                        <Input
                            value={data?.username}
                            label={t('Имя пользователя')}
                            readonly={readonly}
                            onChange={onChangeUsername}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Аватар')}
                            readonly={readonly}
                            onChange={onChangeAvatar}
                        />
                        <CurrencySelect
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readonly}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    )
})
