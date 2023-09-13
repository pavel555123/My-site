import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleTypeTabs } from './ArticleTypeTabs'

export default {
    title: 'features/articleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = {}
NormalRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]
