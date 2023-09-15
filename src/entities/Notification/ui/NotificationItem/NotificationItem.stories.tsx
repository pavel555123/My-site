import { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { Notification } from '../../model/types/notification'
import { NotificationItem } from './NotificationItem'

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem
}

export default meta
type Story = StoryObj<typeof NotificationItem>

const item: Notification = {
    id: '1',
    title: 'Yandex',
    description: 'link',
    href: 'https://ya.ru/'
}

export const Normal: Story = {
    args: { item }
}

export const NormalRedesigned: Story = {
    args: { item },
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
