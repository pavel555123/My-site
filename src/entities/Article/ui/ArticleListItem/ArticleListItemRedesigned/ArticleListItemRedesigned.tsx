import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/redesigned/Text'
import { Icon } from '@/shared/ui/redesigned/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Card } from '@/shared/ui/redesigned/Card'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { getRouteArticleDetails } from '@/shared/const/router'
import { ArticleTextBlock } from '../../../model/types/article'
import { ArticleBlockType, ArticleView } from '../../../model/consts/articleConsts'
import { ArticleListItemProps } from '../ArticleListItem'
import cls from './ArticleListItemRedesigned.module.scss'

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target
    } = props

    const { t } = useTranslation('article')

    const userInfo = (
        <>
            <Avatar className={cls.avatar} src={article.user.avatar} size={32}/>
            <Text text={article.user.username} bold/>
        </>
    )
    const views = (
        <HStack gap='8'>
            <Icon Svg={EyeIcon}/>
            <Text className={cls.views} text={String(article.views)}/>
        </HStack>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
        return (
            <Card
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                padding='24'
                max
                data-testid={'ArticleListItem'}
            >
                <VStack gap='16' max>
                    <HStack gap='8' max>
                        <Avatar src={article.user.avatar} size={32}/>
                        <Text text={article.user.username} bold/>
                        <Text text={article.createdAt}/>
                    </HStack>
                    <Text className={cls.title} title={article.title} bold/>
                    <Text className={cls.title} title={article.subtitle} size='s'/>
                    <AppImage
                        className={cls.image}
                        src={article.img}
                        alt={article.title}
                        fallback={<Skeleton width='100%' height={250}/>}
                    />
                    {textBlock?.paragraphs && (
                        <Text className={cls.textBlock} text={textBlock.paragraphs.slice(0, 2).join(' ')}/>
                    )}
                    <HStack justify='between' max>
                        <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                            <Button>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        )
    }

    return (
        <AppLink
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            to={getRouteArticleDetails(article.id)}
            target={target}
            data-testid={'ArticleListItem'}
        >
            <Card className={cls.card} padding='0' border='partial'>
                <AppImage
                    className={cls.image}
                    src={article.img}
                    alt={article.title}
                    fallback={<Skeleton width='100%' height={200}/>}
                />
                <VStack className={cls.info} gap='4'>
                    <Text className={cls.title} text={article.title}/>
                    <VStack className={cls.footer} gap='4' max>
                        <HStack justify='between' max>
                            <Text className={cls.date} text={article.createdAt}/>
                            {views}
                        </HStack>
                    </VStack>
                    <HStack gap='4'>{userInfo}</HStack>
                </VStack>
            </Card>
        </AppLink>
    )
})
