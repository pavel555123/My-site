import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/Stack'
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
            <HStack className={classNames(cls.AddCommentForm, {}, [className])} justify='between' max>
                <Input
                    className={cls.input}
                    value={text}
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
