import { classNames } from 'shared/lib/classNames/classNames'
// import cls from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const view = useSelector(getArticlesPageView)
    const isLoading = useSelector(getArticlesPageIsLoading)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState())
        dispatch(fetchArticlesList({
            page: 1
        }))
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames('', {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList articles={articles} view={view} isLoading={isLoading}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
