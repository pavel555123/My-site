import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
    decorators: [StoreDecorator({
        user: { authData: {} }
    })]
}

export const NoAuth: Story = {
    decorators: [StoreDecorator({
        user: {}
    })]
}

export const LightRedesigned: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: {} }
        }),
        FeatureFlagsDecorator({ isAppRedesigned: true })
    ]
}

export const NoAuthRedesigned: Story = {
    decorators: [
        StoreDecorator({
            user: {}
        }),
        FeatureFlagsDecorator({ isAppRedesigned: true })
    ]
}
