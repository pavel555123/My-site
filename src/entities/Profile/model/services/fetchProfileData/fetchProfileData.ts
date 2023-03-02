import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, ThunkAPI) => {
        const { extra, rejectWithValue } = ThunkAPI

        try {
            const response = await extra.api.get<Profile>('/profile')

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
