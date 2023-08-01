import { buildSlice } from '@/shared/lib/store'
import { type CounterScheme } from '../types/counterScheme'

const initialState: CounterScheme = {
    value: 0
}

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions
} = counterSlice
