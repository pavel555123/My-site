import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { CommentCard } from './CommentCard'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

const comment = {

    id: '1',
    text: '123',
    user: { id: '1', username: 'Pavel' }

}

export const Normal = Template.bind({})
Normal.args = { comment }

export const Loading = Template.bind({})
Loading.args = { comment, isLoading: true }

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = { comment }
NormalRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]

export const LoadingRedesigned = Template.bind({})
LoadingRedesigned.args = { comment, isLoading: true }
LoadingRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]
