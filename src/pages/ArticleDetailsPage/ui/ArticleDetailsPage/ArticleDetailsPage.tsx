import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { ArticleRating } from '@/features/articleRating'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer'
import { DetailsContainer } from '../DetailsContainer/DetailsContainer'
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

    if (!id) {
        return null
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <StickyContentLayout
                        content={
                            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                                <VStack gap='16' max>
                                    <DetailsContainer/>
                                    <ArticleRating articleId={id}/>
                                    <ArticleRecommendationsList/>
                                    <ArticleDetailsComments id={id}/>
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer/>}
                    />
                }
                off={
                    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                        <VStack gap='16' max>
                            <ArticleDetailsPageHeader/>
                            <ArticleDetails id={id}/>
                            <ArticleRating articleId={id}/>
                            <ArticleRecommendationsList/>
                            <ArticleDetailsComments id={id}/>
                        </VStack>
                    </Page>
                }
            />
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
