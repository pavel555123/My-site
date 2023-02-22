import { counterReducer, counterActions } from './counterSlice'
import { type CounterScheme } from 'entities/Counter'

describe('counterSlice.test', () => {
    test('increment', () => {
        const state: CounterScheme = { value: 10 }
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
    })
    test('decrement', () => {
        const state: CounterScheme = { value: 10 }
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
    })
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
    })
})
