import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'
import AdminPanelPage from './AdminPanelPage'

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage
}

export default meta
type Story = StoryObj<typeof AdminPanelPage>

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}
