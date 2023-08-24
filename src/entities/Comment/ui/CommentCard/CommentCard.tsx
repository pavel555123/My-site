import { memo } from 'react'
import { Text } from '@/shared/ui/deprecated/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getRouteProfile } from '@/shared/const/router'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { type Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
                gap='8'
                max
                data-testid={'CommentCard.Loading'}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%'/>
                    <Skeleton className={cls.username} width={100} height={16}/>
                </div>
                <Skeleton className={cls.text} width='100%' height={50}/>
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack
            className={classNames(cls.CommentCard, {}, [className])}
            gap='8'
            max
            data-testid={'CommentCard.Content'}
        >
            <AppLink className={cls.header} to={getRouteProfile(comment.user.id)}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
                <Text className={cls.username} title={comment.user.username}/>
            </AppLink>
            <Text className={cls.text} text={comment.text}/>
        </VStack>
    )
})
