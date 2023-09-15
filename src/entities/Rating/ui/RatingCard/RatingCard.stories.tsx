import { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { RatingCard } from './RatingCard'

const meta: Meta<typeof RatingCard> = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard
}

export default meta
type Story = StoryObj<typeof RatingCard>

export const Normal: Story = {}

export const NormalRedesigned: Story = {
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
