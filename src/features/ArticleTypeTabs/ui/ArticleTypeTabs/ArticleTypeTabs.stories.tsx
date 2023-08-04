import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleTypeTabs } from './ArticleTypeTabs'

export default {
    title: 'featuresArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {}