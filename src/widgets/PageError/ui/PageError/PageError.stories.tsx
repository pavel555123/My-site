import { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError
}

export default meta
type Story = StoryObj<typeof PageError>

export const Light: Story = {}

export const LightRedesigned: Story = {
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
