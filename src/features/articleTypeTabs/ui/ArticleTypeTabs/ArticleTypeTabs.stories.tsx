import { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleTypeTabs } from './ArticleTypeTabs'

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'features/articleTypeTabs',
    component: ArticleTypeTabs
}

export default meta
type Story = StoryObj<typeof ArticleTypeTabs>

export const Normal: Story = {}

export const NormalRedesigned: Story = {
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
