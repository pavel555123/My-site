import { configureStore } from '@reduxjs/toolkit'
import { type StateScheme } from './StateScheme'
import { counterReducer } from 'entities/Counter'

export function createReduxStore (initialState?: StateScheme) {
    return configureStore<StateScheme>({
        reducer: {
            counter: counterReducer
        },
        devTools: IS_DEV,
        preloadedState: initialState
    })
}
