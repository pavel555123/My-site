import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    title: 'shared/redesigned/Button',
    component: Button,
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: { children: 'Text' }
}

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear'
    }
}

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: 'outline'
    }
}

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'l'
    }
}

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        variant: 'outline',
        size: 'xl'
    }
}

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        variant: 'outline'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Square: Story = {
    args: {
        children: 'Text',
        variant: 'filled',
        square: true
    }
}

export const SquareSizeL: Story = {
    args: {
        children: 'Text',
        variant: 'filled',
        square: true,
        size: 'l'
    }
}

export const SquareSizeXL: Story = {
    args: {
        children: 'Text',
        variant: 'filled',
        square: true,
        size: 'xl'
    }
}
