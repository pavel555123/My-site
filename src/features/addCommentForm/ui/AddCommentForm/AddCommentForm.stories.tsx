import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import AddCommentForm from './AddCommentForm'

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/addCommentForm',
    component: AddCommentForm
}

export default meta
type Story = StoryObj<typeof AddCommentForm>

export const Normal: Story = {
    args: {
        onSendComment: action('onSendComment')
    },
    decorators: [StoreDecorator({})]
}

export const NormalRedesigned: Story = {
    args: {
        onSendComment: action('onSendComment')
    },
    decorators: [StoreDecorator({}), FeatureFlagsDecorator({ isAppRedesigned: true })]
}
