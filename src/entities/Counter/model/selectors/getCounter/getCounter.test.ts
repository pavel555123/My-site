import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/providers/StoreProvider'
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter'

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 }
        }
        expect(getCounter(state as StateScheme)).toEqual({ value: 10 })
    })
})
