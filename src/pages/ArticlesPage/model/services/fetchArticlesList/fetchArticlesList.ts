import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'

interface FetchArticlesListProps {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, ThunkAPI) => {
        const { extra, rejectWithValue, getState } = ThunkAPI
        const { page = 1 } = props
        const limit = getArticlesPageLimit(getState())

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
