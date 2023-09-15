import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { NotificationList } from './NotificationList'

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList
}

export default meta
type Story = StoryObj<typeof NotificationList>

const normalParams = {
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

export const Normal: Story = {
    decorators: [StoreDecorator({})],
    parameters: normalParams
}

export const NormalRedesigned: Story = {
    decorators: [StoreDecorator({}), FeatureFlagsDecorator({ isAppRedesigned: true })],
    parameters: normalParams
}
