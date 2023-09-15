import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'
import SettingsPage from './SettingsPage'

const meta: Meta<typeof SettingsPage> = {
    title: 'pages/SettingsPage',
    component: SettingsPage
}

export default meta
type Story = StoryObj<typeof SettingsPage>

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}
