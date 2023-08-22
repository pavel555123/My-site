import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { setJsonSettingsMutation } from '../../api/userApi'
import { getJsonSettings } from '../selectors/jsonSettings'
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData'
import { JsonSettings } from '../types/jsonSettings'

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
    'user/saveJsonSettings',
    async (newJsonSettings, ThunkAPI) => {
        const { getState, dispatch, rejectWithValue } = ThunkAPI
        const userData = getUserAuthData(getState())
        const currentSettings = getJsonSettings(getState())

        if (!userData) {
            return rejectWithValue('userData error')
        }

        try {
            const response = await dispatch(setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings
                }
            })).unwrap()

            if (!response.jsonSettings) {
                return rejectWithValue('jsonSettings error')
            }

            return response.jsonSettings
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
