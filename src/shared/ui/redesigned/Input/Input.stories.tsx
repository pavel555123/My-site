import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Input } from './Input'

export default {
    title: 'shared/redesigned/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Text',
    value: '123123'
}
