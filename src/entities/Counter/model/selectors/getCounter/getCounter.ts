import { type StateScheme } from 'app/providers/StoreProvider'

export const getCounter = (state: StateScheme) => state.counter
