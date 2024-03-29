import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleList } from '@/entities/Article'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
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
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Text title={t('Рекомендуем')} size='l'/>}
                off={<TextDeprecated title={t('Рекомендуем')} size={TextSize.L}/>}
            />
            <ArticleList
                articles={articles}
                target={'_blank'}
            />
        </VStack>
    )
})
