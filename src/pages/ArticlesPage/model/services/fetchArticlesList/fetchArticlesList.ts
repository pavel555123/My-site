import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, ThunkAPI) => {
        const { extra, rejectWithValue } = ThunkAPI

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user'
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
