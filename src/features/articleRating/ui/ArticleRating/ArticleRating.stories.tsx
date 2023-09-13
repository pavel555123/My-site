import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import ArticleRating from './ArticleRating'

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />

export const Normal = Template.bind({})
Normal.args = {
    articleId: '1'
}
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' }
        }
    })
]
Normal.parameters = {
    mockData: [
        {
            url: `${API}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4
                }
            ]
        }
    ]
}

export const WithoutRate = Template.bind({})
WithoutRate.args = {
    articleId: '1'
}
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' }
        }
    })
]
WithoutRate.parameters = {
    mockData: [
        {
            url: `${API}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: []
        }
    ]
}

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = {
    articleId: '1'
}
NormalRedesigned.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' }
        }
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true })
]
NormalRedesigned.parameters = {
    mockData: [
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
}

export const WithoutRateRedesigned = Template.bind({})
WithoutRateRedesigned.args = {
    articleId: '1'
}
WithoutRateRedesigned.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' }
        }
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true })
]
WithoutRateRedesigned.parameters = {
    mockData: [
        {
            url: `${API}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: []
        }
    ]
}
