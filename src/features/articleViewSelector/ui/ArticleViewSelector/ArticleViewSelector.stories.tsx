import { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleViewSelector } from './ArticleViewSelector'

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'features/articleViewSelector',
    component: ArticleViewSelector
}

export default meta
type Story = StoryObj<typeof ArticleViewSelector>

export const Normal: Story = {}

export const NormalRedesigned: Story = {
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
