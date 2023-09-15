import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
    title: 'shared/redesigned/Avatar',
    component: Avatar
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Normal: Story = {
    args: {
        src: 'https://w.forfun.com/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg',
        alt: 'avatar'
    }
}
