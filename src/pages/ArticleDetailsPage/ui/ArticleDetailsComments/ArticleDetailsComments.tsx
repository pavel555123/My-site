import { memo, Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AddCommentForm } from '@/features/addCommentForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsCommentsProps {
    className?: string
    id?: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props
    const { t } = useTranslation()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    return (
        <VStack className={classNames('', {}, [className])} gap='16' max>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Text title={t('Комментарии')} size='l'/>}
                off={<TextDeprecated title={t('Комментарии')} size={TextSize.L}/>}
            />
            <Suspense fallback={<Loader/>}>
                <AddCommentForm onSendComment={onSendComment}/>
            </Suspense>
            <CommentList comments={comments} isLoading={commentsIsLoading}/>
        </VStack>
    )
})
