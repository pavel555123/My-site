import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { type Article } from '@/entities/Article'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />

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

export const Normal = Template.bind({})
Normal.args = {

}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
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
