import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
    title: 'shared/deprecated/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        Story => <div style={{ padding: 200 }}><Story/></div>
    ]
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
    items: [
        { content: '121312312', value: '123' },
        { content: '12131221312312', value: '123123' }
    ]
}

export const topRight = Template.bind({})
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: '121312312', value: '123' },
        { content: '12131221312312', value: '123123' }
    ]
}

export const topLeft = Template.bind({})
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: '121312312', value: '123' },
        { content: '12131221312312', value: '123123' }
    ]
}

export const bottomRight = Template.bind({})
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: '121312312', value: '123' },
        { content: '12131221312312', value: '123123' }
    ]
}

export const bottomLeft = Template.bind({})
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: '121312312', value: '123' },
        { content: '12131221312312', value: '123123' }
    ]
}
