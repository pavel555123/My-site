import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { getRouteProfile } from '@/shared/const/router'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { type Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated
    })

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card padding='24' border='round' max>
                    <VStack
                        className={classNames(cls.CommentCardRedesigned, {}, [className])}
                        gap='8'
                        max
                        data-testid={'CommentCard.Content'}
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack gap='8'>
                                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
                                <Text text={comment.user.username} bold/>
                            </HStack>
                        </AppLink>
                        <Text text={comment.text}/>
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    className={classNames(cls.CommentCard, {}, [className])}
                    gap='8'
                    max
                    data-testid={'CommentCard.Content'}
                >
                    <AppLinkDeprecated className={cls.header} to={getRouteProfile(comment.user.id)}>
                        {comment.user.avatar ? <AvatarDeprecated size={30} src={comment.user.avatar}/> : null}
                        <TextDeprecated className={cls.username} title={comment.user.username}/>
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment.text}/>
                </VStack>
            }
        />
    )
})
