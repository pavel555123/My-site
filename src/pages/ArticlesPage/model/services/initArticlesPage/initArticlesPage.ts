import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, ThunkAPI) => {
        const { getState, dispatch } = ThunkAPI
        const inited = getArticlesPageInited(getState())

        if (!inited) {
            dispatch(articlesPageActions.initState())
            dispatch(fetchArticlesList({
                page: 1
            }))
        }
    }
)
