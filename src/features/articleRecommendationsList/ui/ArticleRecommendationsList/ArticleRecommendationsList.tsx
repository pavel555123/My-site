import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleList } from '@/entities/Article'

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3)

    if (isLoading || error || !articles) {
        return null
    }

    return (
        <VStack
            className={classNames('', {}, [className])}
            gap='8'
            data-testid={'ArticleRecommendationsList'}
        >
            <Text
                title={t('Рекомендуем')}
                size={TextSize.L}
            />
            <ArticleList
                articles={articles}
                target={'_blank'}
            />
        </VStack>
    )
})
