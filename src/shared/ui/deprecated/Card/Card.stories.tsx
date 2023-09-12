import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Text } from '../Text/Text'
import { Card } from './Card'

export default {
    title: 'shared/deprecated/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Normal = Template.bind({})
Normal.args = {
    children: <Text title='title' text='text'/>
}
