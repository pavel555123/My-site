import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/fetchByIdStatus',
    async (AuthData, ThunkAPI) => {
        const { dispatch, extra, rejectWithValue } = ThunkAPI

        try {
            const response = await extra.api.post<User>('/login', AuthData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
