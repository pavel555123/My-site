import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ArticleDetailsComments } from './ArticleDetailsComments'

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments
}

export default meta
type Story = StoryObj<typeof ArticleDetailsComments>

export const Normal: Story = {
    decorators: [StoreDecorator({})]
}

export const NormalRedesigned: Story = {
    decorators: [StoreDecorator({}), FeatureFlagsDecorator({ isAppRedesigned: true })]
}
