import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'
import ForbiddenPage from './ForbiddenPage'

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage
}

export default meta
type Story = StoryObj<typeof ForbiddenPage>

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}
