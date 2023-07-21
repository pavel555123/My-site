import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import { useSelector } from 'react-redux'
import { getArticles } from '../../model/slices/articlesPageSlice'
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Text } from '@/shared/ui/Text/Text'

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
        return <Text text={t('Error')}/>
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
