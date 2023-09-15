import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
    title: 'shared/redesigned/Text',
    component: Text
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text'
    }
}

export const OnlyTitle: Story = {
    args: { title: 'Title' }
}

export const OnlyText: Story = {
    args: { text: 'Text' }
}

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        variant: 'error'
    }
}

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitleDark: Story = {
    args: { title: 'Title' },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTextDark: Story = {
    args: { text: 'Text' },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: 'l'
    }
}

export const SizeM: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: 'm'
    }
}

export const SizeS: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: 's'
    }
}
