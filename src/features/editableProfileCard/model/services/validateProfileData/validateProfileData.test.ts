import { validateProfileData } from './validateProfileData'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { ValidateProfileError } from '../../consts/consts'

describe('validateProfileData.test', () => {
    const data = {
        first: 'Pavel',
        lastname: 'Nikiforov',
        age: 20,
        city: 'Krasnoyarsk',
        username: 'admin',
        currency: Currency.RUB,
        country: Country.Russia
    }

    test('success', () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first and lastname', () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    })

    test('incorrect age', () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ])
    })

    test('incorrect country', () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })

    test('incorrect all', () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })
})
