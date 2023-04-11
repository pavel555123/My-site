import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
    articlesPage: {
        entities: {
            1: {
                /// /////
            }
        }
    }
})]
