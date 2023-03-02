import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
    test('should return 123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('123')
    })
    test('should return empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
