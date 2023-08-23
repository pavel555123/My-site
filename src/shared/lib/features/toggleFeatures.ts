import { FeatureFlags } from '@/shared/types/featureFlags'
import { getFeatureFlag } from './setGetFeatures'

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags
    on: () => T
    off: () => T
}

export function toggleFeatures<T> (props: ToggleFeaturesOptions<T>): T {
    const { name, on, off } = props
    if (getFeatureFlag(name)) {
        return on()
    }

    return off()
}
