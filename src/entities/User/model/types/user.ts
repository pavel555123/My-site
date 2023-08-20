import { FeatureFlags } from '@/shared/types/featureFlags'
import { type UserRole } from '../consts/consts'

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
    features?: FeatureFlags
}

export interface UserScheme {
    authData?: User
    _init: boolean
}
