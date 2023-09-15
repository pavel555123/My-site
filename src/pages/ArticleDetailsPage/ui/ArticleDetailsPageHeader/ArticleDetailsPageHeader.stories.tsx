import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader
}

export default meta
type Story = StoryObj<typeof ArticleDetailsPageHeader>

export const Normal: Story = {
    decorators: [StoreDecorator({})]
}

export const NormalRedesigned: Story = {
    decorators: [StoreDecorator({}), FeatureFlagsDecorator({ isAppRedesigned: true })]
}
