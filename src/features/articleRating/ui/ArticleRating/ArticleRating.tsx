import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { ToggleFeatures } from '@/shared/lib/features'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props
    const { t } = useTranslation()
    const userData = useSelector((getUserAuthData))

    const { data, isLoading } = useGetArticleRating({
        userId: userData?.id ?? '',
        articleId
    })

    const [rateArticleMutation] = useRateArticle()

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback)
    }, [handleRateArticle])

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount)
    }, [handleRateArticle])

    const rating = data?.[0]

    if (isLoading) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Skeleton width='100%' height={120}/>}
                off={<SkeletonDeprecated width='100%' height={120}/>}
            />
        )
    }

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ArticleRating
