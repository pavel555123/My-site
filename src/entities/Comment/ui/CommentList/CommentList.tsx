import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <VStack className={classNames('', {}, [className])} gap='16' max>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </VStack>
        )
    }

    return (
        <VStack className={classNames('', {}, [className])} gap='16' max>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        comment={comment}
                        isLoading={isLoading}
                        key={comment.id}/>
                ))
                : <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text text={t('Комментарии отсутствуют')}/>}
                    off={<TextDeprecated text={t('Комментарии отсутствуют')}/>}
                />
            }
        </VStack>
    )
})
