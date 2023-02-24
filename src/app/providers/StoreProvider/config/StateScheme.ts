import { type CounterScheme } from 'entities/Counter'
import { type UserScheme } from 'entities/User'

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme
}
