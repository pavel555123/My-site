import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { type Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from 'shared/ui/Stack'

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
                : <Text text={t('Комментарии отсутствуют')}/>
            }
        </VStack>
    )
})
