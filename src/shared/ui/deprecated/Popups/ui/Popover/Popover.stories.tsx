import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Popover } from './Popover'

export default {
    title: 'shared/deprecated/Popups/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Normal = Template.bind({})
Normal.args = { trigger: <button>123</button>, children: <div>555</div> }
