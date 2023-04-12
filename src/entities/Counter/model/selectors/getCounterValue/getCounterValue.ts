import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'
import { type CounterScheme } from '../../types/counterScheme'

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterScheme) => counter.value
)
