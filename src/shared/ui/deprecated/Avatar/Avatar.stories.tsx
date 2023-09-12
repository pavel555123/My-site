import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Avatar } from './Avatar'
import RabbitImg from './rabbit.jpeg'

export default {
    title: 'shared/deprecated/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: RabbitImg,
    size: 150
}

export const Small = Template.bind({})
Small.args = {
    src: RabbitImg,
    size: 50
}
