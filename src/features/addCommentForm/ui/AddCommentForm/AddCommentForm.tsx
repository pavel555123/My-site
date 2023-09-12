import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card padding='24' border='partial' max>
                        <HStack
                            className={classNames(cls.AddCommentFormRedesigned, {}, [className])}
                            gap='16'
                            justify='between'
                            max
                            data-testid={'AddCommentForm'}
                        >
                            <Input
                                className={cls.input}
                                value={text}
                                placeholder={t('Введите текст комментария')}
                                onChange={onCommentTextChange}
                                data-testid={'addCommentForm.Input'}
                            />
                            <Button
                                onClick={onSendHandler}
                                data-testid={'addCommentForm.Button'}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        className={classNames(cls.AddCommentForm, {}, [className])}
                        justify='between'
                        max
                        data-testid={'AddCommentForm'}
                    >
                        <InputDeprecated
                            className={cls.input}
                            value={text}
                            placeholder={t('Введите текст комментария')}
                            onChange={onCommentTextChange}
                            data-testid={'addCommentForm.Input'}
                        />
                        <ButtonDeprecated
                            onClick={onSendHandler}
                            data-testid={'addCommentForm.Button'}
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
