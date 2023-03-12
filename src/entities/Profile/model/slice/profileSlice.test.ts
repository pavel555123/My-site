import {
    profileActions,
    profileReducer,
    type ProfileSchema,
    updateProfileData,
    ValidateProfileError
} from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('profileSlice.test', () => {
    const data = {
        first: 'Pavel',
        lastname: 'Nikiforov',
        age: 20,
        city: 'Krasnoyarsk',
        username: 'admin',
        currency: Currency.RUB,
        country: Country.Russia
    }

    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true })
    })
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({ readonly: true, validateErrors: undefined, data, form: data })
    })
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '12345' }))).toEqual({ form: { username: '12345' } })
    })
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({ isLoading: true, validateErrors: undefined })
    })
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true }
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({ isLoading: false, validateErrors: undefined, readonly: true, form: data, data })
    })
})
