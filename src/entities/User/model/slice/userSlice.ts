import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { setFeatureFlags } from '@/shared/lib/features'
import { type User, type UserScheme } from '../types/user'

const initialState: UserScheme = {
    _init: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            setFeatureFlags(action.payload.features)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                const json = JSON.parse(user) as User
                state.authData = json
                setFeatureFlags(json.features)
            }
            state._init = true
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
