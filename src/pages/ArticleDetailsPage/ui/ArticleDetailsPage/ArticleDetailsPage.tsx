import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { ArticleRating } from '@/features/articleRating'
import { getFeatureFlag } from '@/shared/lib/features'
import { Counter } from '@/entities/Counter'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { articleDetailsPageReducer } from '../../model/slice'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>()
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled')
    const isCounterEnabled = getFeatureFlag('isCounterEnabled')

    if (!id) {
        return null
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    {isCounterEnabled && <Counter/>}
                    {isArticleRatingEnabled && <ArticleRating articleId={id}/>}
                    <ArticleRecommendationsList/>
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
