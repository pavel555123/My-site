import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage
}

export default meta
type Story = StoryObj<typeof AboutPage>

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}
