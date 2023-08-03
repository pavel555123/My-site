import { useTranslation } from 'react-i18next'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button } from '@/shared/ui/Button'
import { AppLink } from '@/shared/ui/AppLink'
import { getRouteArticleDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target
    } = props

    const { t } = useTranslation('article')

    const types = <Text className={cls.types} text={article.type.join(', ')}/>
    const views = (
        <>
            <Text className={cls.views} text={String(article.views)}/>
            <Icon Svg={EyeIcon}/>
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={article.user.avatar} size={30}/>
                        <Text className={cls.username} text={article.user.username}/>
                        <Text className={cls.date} text={article.createdAt}/>
                    </div>
                    <Text className={cls.title} title={article.title}/>
                    {types}
                    <AppImage
                        className={cls.image}
                        src={article.img}
                        alt={article.title}
                        fallback={<Skeleton width='100%' height={250}/>}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent className={cls.textBlock} block={textBlock}/>
                    )}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                            <Button>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            to={getRouteArticleDetails(article.id)}
            target={target}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        className={cls.image}
                        src={article.img}
                        alt={article.title}
                        fallback={<Skeleton width={200} height={200}/>}
                    />
                    <Text className={cls.date} text={article.createdAt}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title}/>
            </Card>
        </AppLink>
    )
})
