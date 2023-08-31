import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { FeatureFlags } from '@/shared/types/featureFlags'
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures'
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi'

interface UpdateFeatureFlagsProps {
    userId: string
    newFeatures: Partial<FeatureFlags>
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateFeatureFlags = createAsyncThunk<void, UpdateFeatureFlagsProps, ThunkConfig<string>>(
    'features/updateFeatureFlags',
    async ({ userId, newFeatures }, ThunkAPI) => {
        const { dispatch, rejectWithValue } = ThunkAPI

        const allFeatures = {
            ...getAllFeatureFlags(),
            ...newFeatures
        }

        try {
            await dispatch(updateFeatureFlagsMutation({
                userId,
                features: allFeatures
            }))

            setFeatureFlags(allFeatures)
            window.location.reload()
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
