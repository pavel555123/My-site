import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { Notification } from '../../model/types/notification'
import { NotificationItem } from './NotificationItem'

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

const item: Notification = {
    id: '1',
    title: 'Yandex',
    description: 'link',
    href: 'https://ya.ru/'
}

export const Normal = Template.bind({})
Normal.args = { item }

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = { item }
NormalRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]
