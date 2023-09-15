import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'features/themeSwitcher',
    component: ThemeSwitcher
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}
