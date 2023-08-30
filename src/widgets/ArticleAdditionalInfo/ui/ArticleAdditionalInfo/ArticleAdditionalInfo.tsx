import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { User } from '@/entities/User'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'

interface ArticleAdditionalInfoProps {
    className?: string
    author?: User
    views?: number
    createdAt?: string
    onEdit: () => void
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const {
        className,
        author,
        views,
        onEdit,
        createdAt
    } = props
    const { t } = useTranslation()

    return (
        <VStack className={className} gap='32'>
            <HStack gap='8'>
                <Avatar src={author?.avatar} size={32}/>
                <Text text={author?.username} bold/>
                <Text text={createdAt}/>
            </HStack>
            <Button onClick={onEdit} >{t('Редактировать')}</Button>
            <Text text={t('{{count}} просмотров', { count: views })}/>
        </VStack>
    )
})
