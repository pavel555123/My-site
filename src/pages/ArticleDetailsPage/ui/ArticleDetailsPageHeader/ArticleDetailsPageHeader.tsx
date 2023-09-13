import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <HStack className={classNames('', {}, [className])} justify='between' max>
                    <Button onClick={onBackToList}>
                        {t('Назад к списку')}
                    </Button>
                    {canEdit &&
                        <Button onClick={onEditArticle}>
                            {t('Редактировать')}
                        </Button>}
                </HStack>
            }
            off={
                <HStack className={classNames('', {}, [className])} justify='between' max>
                    <ButtonDeprecated onClick={onBackToList}>
                        {t('Назад к списку')}
                    </ButtonDeprecated>
                    {canEdit &&
                        <ButtonDeprecated onClick={onEditArticle}>
                            {t('Редактировать')}
                        </ButtonDeprecated>}
                </HStack>
            }
        />
    )
})
