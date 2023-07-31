import { memo, Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from '@/shared/ui/Stack'
import { Loader } from '@/shared/ui/Loader'
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
            <Text
                title={t('Комментарии')}
                size={TextSize.L}
            />
            <Suspense fallback={<Loader/>}>
                <AddCommentForm onSendComment={onSendComment}/>
            </Suspense>
            <CommentList comments={comments} isLoading={commentsIsLoading}/>
        </VStack>
    )
})
