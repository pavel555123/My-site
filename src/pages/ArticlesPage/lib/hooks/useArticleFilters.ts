import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sort'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../model/slices/articlesPageSlice'
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'

export function useArticleFilters () {
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort))
        dispatch(articlesPageActions.setPage(1))
        debounceFetchData()
    }, [debounceFetchData, dispatch])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder))
        dispatch(articlesPageActions.setPage(1))
        debounceFetchData()
    }, [debounceFetchData, dispatch])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search))
        dispatch(articlesPageActions.setPage(1))
        debounceFetchData()
    }, [debounceFetchData, dispatch])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType
    }
}
