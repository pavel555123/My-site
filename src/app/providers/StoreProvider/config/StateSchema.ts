import { type AnyAction, type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type AxiosInstance } from 'axios'
import { type CounterScheme } from '@/entities/Counter'
import { type UserScheme } from '@/entities/User'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ArticleDetailsSchema } from '@/entities/Article'
import { type ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from '@/features/AddCommentForm'
import { type ArticlesPageSchema } from '@/pages/ArticlesPage'
import { type ScrollSaveSchema } from '@/features/ScrollSave'
import { type rtkApi } from '@/shared/api/rtkApi'
import { type ProfileSchema } from '@/features/editableProfileCard'

export interface StateSchema {
    counter: CounterScheme
    user: UserScheme
    scrollSave: ScrollSaveSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
