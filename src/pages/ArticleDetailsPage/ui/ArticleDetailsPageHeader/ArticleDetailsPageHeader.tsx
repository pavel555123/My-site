import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { Button } from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { getCanEditArticle } from '../../model/selectors/article'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('article')
    const navigate = useNavigate()
    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles())
    }, [navigate])

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id))
        }
    }, [article, navigate])

    return (
        <HStack className={classNames('', {}, [className])} justify='between' max>
            <Button onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit &&
                <Button onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>}
        </HStack>
    )
})
