import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { User } from '../types/user'
import { getUserDataByIdQuery } from '../../api/userApi'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (newJsonSettings, ThunkAPI) => {
        const { dispatch, rejectWithValue } = ThunkAPI

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

        if (!userId) {
            return rejectWithValue('userId error')
        }

        try {
            const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()

            return response
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
