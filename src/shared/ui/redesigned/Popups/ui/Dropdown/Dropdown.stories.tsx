import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button } from '../../../Button/Button'
import { Dropdown } from './Dropdown'

export default {
    title: 'shared/redesigned/Popups/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Normal = Template.bind({})
Normal.args = {
    trigger: <Button>123</Button>,
    items: [
        {
            content: 'first'
        },
        {
            content: 'second'
        },
        {
            content: 'third'
        }
    ]
}
