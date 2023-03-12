import { getProfileValidateErrors } from './getProfileValidateErrors'
import { type StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from 'entities/Profile'

describe('getProfileValidateErrors.test', () => {
    test('should return errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE
                ]
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE
        ])
    })
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
