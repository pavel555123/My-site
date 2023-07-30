import { rtkApi } from '@/shared/api/rtkApi'
import { Rating } from '@/entities/Rating'

interface GetArticleRating {
    userId: string
    articleId: string
}

interface RateArticleArg {
    userId: string
    articleId: string
    rate: number
    feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRating>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId
                }
            })
        }),
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg
            })
        })
    })
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
