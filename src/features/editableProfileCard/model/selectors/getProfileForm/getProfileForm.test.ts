import { getProfileForm } from './getProfileForm'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('getProfileForm.test', () => {
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
                form: data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
