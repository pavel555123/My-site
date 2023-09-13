import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleSortSelector } from './ArticleSortSelector'

export default {
    title: 'features/articleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleSortSelector>

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = {}
NormalRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]
