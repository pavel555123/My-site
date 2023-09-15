import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader
}

export default meta
type Story = StoryObj<typeof EditableProfileCardHeader>

export const Normal: Story = {
    decorators: [StoreDecorator({})]
}

export const NormalRedesigned: Story = {
    decorators: [StoreDecorator({}), FeatureFlagsDecorator({ isAppRedesigned: true })]
}
