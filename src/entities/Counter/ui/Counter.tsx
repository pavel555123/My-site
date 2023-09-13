import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/redesigned/Button'
import { useCounterActions } from '../model/slice/counterSlice'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    const counterValue = useCounterValue()
    const { t } = useTranslation()
    const { increment, decrement } = useCounterActions()

    const handleInc = () => {
        increment()
    }

    const handleDec = () => {
        decrement()
    }

    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button data-testid='increment-btn' onClick={handleInc}>{t('Добавить')}</Button>
            <Button data-testid='decrement-btn' onClick={handleDec}>{t('Отнять')}</Button>
        </div>
    )
}
