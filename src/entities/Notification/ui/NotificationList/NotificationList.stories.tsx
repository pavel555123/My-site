import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { NotificationList } from './NotificationList'

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock]
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
Normal.decorators = [StoreDecorator({})]
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
                },
                {
                    id: '2',
                    title: '12345',
                    description: 'abcde'
                },
                {
                    id: '3',
                    title: '1234567',
                    description: 'abcfg'
                }
            ]
        }
    ]
}
