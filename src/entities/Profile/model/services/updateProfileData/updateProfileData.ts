import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, ThunkAPI) => {
        const { extra, rejectWithValue, getState } = ThunkAPI

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
