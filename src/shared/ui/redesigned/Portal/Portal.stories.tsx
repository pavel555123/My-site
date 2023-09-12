import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Portal } from './Portal'

export default {
    title: 'shared/redesigned/Portal',
    component: Portal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Portal>

const Template: ComponentStory<typeof Portal> = (args) => <Portal {...args} />

export const Normal = Template.bind({})
Normal.args = { children: <div>123</div> }
