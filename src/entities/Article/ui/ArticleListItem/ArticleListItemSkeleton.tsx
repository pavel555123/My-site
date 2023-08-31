import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { ArticleView } from '../../model/consts/articleConsts'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
    className?: string
    view: ArticleView
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.ArticleListItemRedesigned,
        off: () => cls.ArticleListItem
    })

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated
    })

    if (view === ArticleView.BIG) {
        const cardContent = (
            <>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%'/>
                    <Skeleton className={cls.username} width={150} height={16}/>
                    <Skeleton className={cls.date} width={150} height={16}/>
                </div>
                <Skeleton className={cls.title} width={250} height={24}/>
                <Skeleton className={cls.image} height={200}/>
                <div className={cls.footer}>
                    <Skeleton width={200} height={36}/>
                </div>
            </>
        )

        return (
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={
                        <CardRedesigned className={cls.card} border='round'>
                            {cardContent}
                        </CardRedesigned>
                    }
                    off={
                        <CardDeprecated className={cls.card}>
                            {cardContent}
                        </CardDeprecated>
                    }
                />
            </div>
        )
    }

    const cardContent = (
        <>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Skeleton
                        className={cls.image}
                        width='100%'
                        height={150}
                        border='32px'
                    />
                }
                off={
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            className={cls.image}
                            width={200}
                            height={200}
                        />
                    </div>
                }
            />
            <div className={cls.infoWrapper}>
                <Skeleton width={130} height={16}/>
            </div>
            <Skeleton width={150} height={16} className={cls.title}/>
        </>
    )

    return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <CardRedesigned className={cls.card} border='round'>
                        {cardContent}
                    </CardRedesigned>
                }
                off={
                    <CardDeprecated className={cls.card}>
                        {cardContent}
                    </CardDeprecated>
                }
            />
        </div>
    )
})
