import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, ThunkAPI) => {
        const { getState, dispatch } = ThunkAPI
        const page = getArticlesPageNum(getState())
        const hasMore = getArticlesPageHasMore(getState())
        const isLoading = getArticlesPageIsLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1))
            dispatch(fetchArticlesList({}))
        }
    }
)
