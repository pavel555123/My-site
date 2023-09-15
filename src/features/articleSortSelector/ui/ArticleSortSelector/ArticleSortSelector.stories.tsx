import { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'features/articleSortSelector',
    component: ArticleSortSelector
}

export default meta
type Story = StoryObj<typeof ArticleSortSelector>

export const Normal: Story = {}

export const NormalRedesigned: Story = {
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
