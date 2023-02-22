import { getCounterValue } from './getCounterValue'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/providers/StoreProvider'

describe('getCounterValue.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateScheme)).toEqual(10)
    })
})
