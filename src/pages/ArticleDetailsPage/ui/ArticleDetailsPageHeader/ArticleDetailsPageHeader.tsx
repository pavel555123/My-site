import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/article'
import { getArticleDetailsData } from 'entities/Article'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`)
    }, [article?.id, navigate])

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit &&
                <Button className={cls.editBtn} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>}
        </div>
    )
})
