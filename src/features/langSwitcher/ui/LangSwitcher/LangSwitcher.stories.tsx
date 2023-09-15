import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { LangSwitcher } from './LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
    title: 'features/langSwitcher',
    component: LangSwitcher
}

export default meta
type Story = StoryObj<typeof LangSwitcher>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
