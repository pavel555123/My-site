import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { CommentList } from './CommentList'

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

const normalArgs = {
    comments: [
        {
            id: '1',
            text: '123',
            user: { id: '1', username: 'Pavel' }
        },
        {
            id: '2',
            text: '12345',
            user: { id: '2', username: 'Pavel123' }
        }
    ]
}

export const Normal = Template.bind({})
Normal.args = normalArgs

export const Loading = Template.bind({})
Loading.args = {
    comments: [],
    isLoading: true
}

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = normalArgs
NormalRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]

export const LoadingRedesigned = Template.bind({})
LoadingRedesigned.args = {
    comments: [],
    isLoading: true
}
LoadingRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]
