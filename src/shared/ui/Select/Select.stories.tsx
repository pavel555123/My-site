import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Select } from './Select'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Hello',
    options: [
        { value: '123', content: 'First' },
        { value: '555', content: 'Second' }
    ]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    label: 'Hello',
    options: [
        { value: '123', content: 'First' },
        { value: '555', content: 'Second' }
    ]
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
