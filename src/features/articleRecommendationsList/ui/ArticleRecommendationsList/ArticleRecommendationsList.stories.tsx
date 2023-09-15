import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { type Article } from '@/entities/Article'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/articleRecommendationsList',
    component: ArticleRecommendationsList
}

export default meta
type Story = StoryObj<typeof ArticleRecommendationsList>

const article: Article = {
    id: '1',
    img: 'https://mind-flows.com/wp-content/uploads/2021/07/java-script-dlya-nachinayushhix.jpg',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'hello'
}

const normalParams = {
    mockData: [
        {
            url: `${API}/articles?_limit=3&_expand=user`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' }
            ]
        }
    ]
}

export const Normal: Story = {
    decorators: [StoreDecorator({})],
    parameters: normalParams
}

export const NormalRedesigned: Story = {
    decorators: [StoreDecorator({}), FeatureFlagsDecorator({ isAppRedesigned: true })],
    parameters: normalParams
}
