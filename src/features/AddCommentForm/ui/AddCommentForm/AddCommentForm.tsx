import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Input } from '@/shared/ui/deprecated/Input'
import { Button } from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
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
            <HStack
                className={classNames(cls.AddCommentForm, {}, [className])}
                justify='between'
                max
                data-testid={'AddCommentForm'}
            >
                <Input
                    className={cls.input}
                    value={text}
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentTextChange}
                    data-testid={'AddCommentForm.Input'}
                />
                <Button
                    onClick={onSendHandler}
                    data-testid={'AddCommentForm.Button'}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
