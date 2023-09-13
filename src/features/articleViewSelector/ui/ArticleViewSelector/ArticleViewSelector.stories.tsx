import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleViewSelector } from './ArticleViewSelector'

export default {
    title: 'features/articleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleViewSelector>

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = {}
NormalRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]
