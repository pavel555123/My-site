import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Avatar } from './Avatar'

export default {
    title: 'shared/redesigned/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Normal = Template.bind({})
Normal.args = { src: 'https://w.forfun.com/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg', alt: 'avatar' }
