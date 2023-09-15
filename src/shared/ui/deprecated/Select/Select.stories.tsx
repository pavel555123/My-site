import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
    title: 'shared/deprecated/Select',
    component: Select
}

export default meta
type Story = StoryObj<typeof Select>

export const Primary: Story = {
    args: {
        label: 'Hello',
        options: [
            { value: '123', content: 'First' },
            { value: '555', content: 'Second' }
        ]
    }
}

export const PrimaryDark: Story = {
    args: {
        label: 'Hello',
        options: [
            { value: '123', content: 'First' },
            { value: '555', content: 'Second' }
        ]
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
