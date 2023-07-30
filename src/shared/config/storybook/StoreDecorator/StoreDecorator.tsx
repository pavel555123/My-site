import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// TODO
// eslint-disable-next-line test-imports-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line test-imports-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
// eslint-disable-next-line test-imports-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/addCommentFormSlice'
// eslint-disable-next-line test-imports-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice'
// eslint-disable-next-line test-imports-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice'

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
    // eslint-disable-next-line react/display-name
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent/>
    </StoreProvider>
)
