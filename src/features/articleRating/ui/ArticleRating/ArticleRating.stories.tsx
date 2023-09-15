import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import ArticleRating from './ArticleRating'

const meta: Meta<typeof ArticleRating> = {
    title: 'features/articleRating',
    component: ArticleRating
}

export default meta
type Story = StoryObj<typeof ArticleRating>

const data = [
    {
        url: `${API}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
            {
                rate: 3
            }
        ]
    }
]

const dataWithoutRate = [
    {
        url: `${API}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: []
    }
]

export const Normal: Story = {
    args: { articleId: '1' },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' }
            }
        })
    ],
    parameters: { mockData: data }
}

export const WithoutRate: Story = {
    args: { articleId: '1' },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' }
            }
        })
    ],
    parameters: { mockData: dataWithoutRate }
}

export const NormalRedesigned: Story = {
    args: { articleId: '1' },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' }
            }
        }),
        FeatureFlagsDecorator({ isAppRedesigned: true })
    ],
    parameters: { mockData: data }
}

export const WithoutRateRedesigned: Story = {
    args: { articleId: '1' },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' }
            }
        }),
        FeatureFlagsDecorator({ isAppRedesigned: true })
    ],
    parameters: { mockData: dataWithoutRate }
}
