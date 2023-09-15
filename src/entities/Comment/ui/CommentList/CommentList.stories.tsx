import { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { CommentList } from './CommentList'

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList
}

export default meta
type Story = StoryObj<typeof CommentList>

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

export const Normal: Story = {
    args: normalArgs
}

export const Loading: Story = {
    args: { comments: [], isLoading: true }
}

export const NormalRedesigned: Story = {
    args: normalArgs,
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}

export const LoadingRedesigned: Story = {
    args: { comments: [], isLoading: true },
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
