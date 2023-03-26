import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article, ArticleView } from 'entities/Article'
import { type ArticlesPageSchema } from 'pages/ArticlesPage/model/types/articlesPageSchema'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initState: state => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView
            state.view = view
            state.limit = view === ArticleView.BIG ? 4 : 9
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticlesList.fulfilled,
                (
                    state,
                    action: PayloadAction<Article[]>
                ) => {
                    state.isLoading = false
                    articlesAdapter.addMany(state, action.payload)
                    state.hasMore = action.payload.length > 0
                })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice
