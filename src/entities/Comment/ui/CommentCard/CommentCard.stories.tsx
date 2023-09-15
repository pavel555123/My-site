import { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard
}

export default meta
type Story = StoryObj<typeof CommentCard>

const comment = {

    id: '1',
    text: '123',
    user: { id: '1', username: 'Pavel' }

}

export const Normal: Story = {
    args: { comment }
}

export const Loading: Story = {
    args: { comment, isLoading: true }
}

export const NormalRedesigned: Story = {
    args: { comment },
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}

export const LoadingRedesigned: Story = {
    args: { comment, isLoading: true },
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
