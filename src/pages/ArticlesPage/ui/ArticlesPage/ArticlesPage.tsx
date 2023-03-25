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

    useInitialEffect(() => {
        dispatch(fetchArticlesList())
        dispatch(articlesPageActions.initState())
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList articles={articles} view={view} isLoading={isLoading}/>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
