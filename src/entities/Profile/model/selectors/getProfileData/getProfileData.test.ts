import { getProfileData } from './getProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            first: 'Pavel',
            lastname: 'Nikiforov',
            age: 20,
            city: 'Krasnoyarsk',
            username: 'admin',
            currency: Currency.RUB,
            country: Country.Russia
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
