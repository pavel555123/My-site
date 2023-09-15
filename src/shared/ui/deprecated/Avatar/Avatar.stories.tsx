import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import RabbitImg from './rabbit.jpeg'

const meta: Meta<typeof Avatar> = {
    title: 'shared/deprecated/Avatar',
    component: Avatar
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
    args: {
        src: RabbitImg,
        size: 150
    }
}

export const Small: Story = {
    args: {
        src: RabbitImg,
        size: 50
    }
}
