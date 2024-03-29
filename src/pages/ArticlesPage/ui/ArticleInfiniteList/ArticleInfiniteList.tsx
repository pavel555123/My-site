import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Text } from '@/shared/ui/deprecated/Text'
import { ArticleList } from '@/entities/Article'
import { getArticles } from '../../model/slices/articlesPageSlice'
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props
    const { t } = useTranslation()
    const articles = useSelector(getArticles.selectAll)
    const view = useSelector(getArticlesPageView)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)

    if (error) {
        return <Text text={t('Ошибка')}/>
    }

    return (
        <ArticleList
            className={className}
            articles={articles}
            view={view}
            isLoading={isLoading}
        />
    )
})
