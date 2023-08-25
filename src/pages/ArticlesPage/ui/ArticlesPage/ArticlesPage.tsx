import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticlePageGreeting } from '@/features/articlePageGreeting'
import { ToggleFeatures } from '@/shared/lib/features'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { FiltersContainer } from '../FiltersContainer/FiltersContainer'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'
import { articlesPageReducer } from '../../model/slices/articlesPageSlice'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const content = <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
            <StickyContentLayout
                content={
                    <Page
                        data-testid={'ArticlesPage'}
                        onScrollEnd={onLoadNextPart}
                        className={classNames(cls.ArticlesPageRedesigned, {}, [className])}
                    >
                        <ArticleInfiniteList className={cls.list}/>
                        <ArticlePageGreeting/>
                    </Page>
                }
                left={<ViewSelectorContainer/>}
                right={<FiltersContainer/>}
            />
        }
        off={
            <Page
                data-testid={'ArticlesPage'}
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters/>
                <ArticleInfiniteList className={cls.list}/>
                <ArticlePageGreeting/>
            </Page>
        }
    />

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
