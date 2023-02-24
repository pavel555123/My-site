import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateScheme } from './StateScheme'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export function createReduxStore (initialState?: StateScheme) {
    const rootReducer: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer
    }

    return configureStore<StateScheme>({
        reducer: rootReducer,
        devTools: IS_DEV,
        preloadedState: initialState
    })
}
