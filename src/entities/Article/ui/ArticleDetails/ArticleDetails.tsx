import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { classNames } from '@/shared/lib/classNames/classNames'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text as TextDeprecated, TextAlign, TextSize } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { renderArticleBlock } from './renderArticleBlock'
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id?: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer
}

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData)

    return (
        <>
            <HStack className={cls.avatarWrapper} justify='center' max>
                <AvatarDeprecated
                    className={cls.avatar}
                    size={200}
                    src={article?.img}
                />
            </HStack>
            <VStack gap='4' max data-testid={'ArticleDetails.Info'}>
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack className={cls.articleInfo} gap='8'>
                    <IconDeprecated className={cls.icon} Svg={EyeIcon}/>
                    <TextDeprecated text={String(article?.views)}/>
                </HStack>
                <HStack className={cls.articleInfo} gap='8'>
                    <IconDeprecated className={cls.icon} Svg={CalendarIcon}/>
                    <TextDeprecated text={article?.createdAt}/>
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    )
}

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData)

    return (
        <>
            <Text title={article?.title} size='l' bold/>
            <Text title={article?.subtitle} size='l'/>
            <AppImage
                className={cls.image}
                fallback={<Skeleton width='100%' height={420} border='16px'/>}
                src={article?.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    )
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)

    useEffect(() => {
        if (PROJECT !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <>
                <SkeletonDeprecated className={cls.avatar} width={200} height={200} border='50%'/>
                <SkeletonDeprecated className={cls.title} width={300} height={32}/>
                <SkeletonDeprecated className={cls.skeleton} width={600} height={24}/>
                <SkeletonDeprecated className={cls.skeleton} width='100%' height={200}/>
                <SkeletonDeprecated className={cls.skeleton} width='100%' height={200}/>
            </>
        )
    } else if (error) {
        content = (
            <TextDeprecated
                align={TextAlign.CENTER}
                title='error'
            />
        )
    } else {
        content = (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Redesigned/>}
                off={<Deprecated/>}
            />
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack className={classNames(cls.ArticleDetails, {}, [className])} gap='16' max>
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
