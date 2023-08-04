import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { NotificationItem } from './NotificationItem'

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock]
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.parameters = {
    mockData: [
        {
            url: `${API}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: '123',
                    description: 'abc'
                }
            ]
        }
    ]
}
