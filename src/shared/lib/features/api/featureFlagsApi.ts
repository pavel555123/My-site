import { rtkApi } from '@/shared/api/rtkApi'
import { FeatureFlags } from '@/shared/types/featureFlags'

interface updateFeatureFlagsArg {
    userId: string
    features: Partial<FeatureFlags>
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        updateFeatureFlags: build.mutation<void, updateFeatureFlagsArg>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features
                }
            })
        })
    })
})

export const updateFeatureFlagsMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate
