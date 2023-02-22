import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'
import { type CounterScheme } from 'entities/Counter'

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterScheme) => counter.value
)
