import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
    title: 'shared/deprecated/Skeleton',
    component: Skeleton
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200
    }
}

export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%'
    }
}

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const CircleDark: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
