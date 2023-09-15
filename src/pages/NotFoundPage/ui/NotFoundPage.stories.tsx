import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'
import { NotFoundPage } from './NotFoundPage'

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage
}

export default meta
type Story = StoryObj<typeof NotFoundPage>

export const Normal: Story = {
    decorators: [StoreDecorator({})]
}

export const Dark: Story = {
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)]
}
