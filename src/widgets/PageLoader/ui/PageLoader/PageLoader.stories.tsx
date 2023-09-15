import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { PageLoader } from './PageLoader'

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader
}

export default meta
type Story = StoryObj<typeof PageLoader>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
