import { Meta, StoryObj } from '@storybook/react'
import UserIcon from '@/shared/assets/icons/user.svg'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { SidebarItemType } from '../../model/types/sidebar'
import { SidebarItem } from './SidebarItem'

const meta: Meta<typeof SidebarItem> = {
    title: 'widgets/SidebarItem',
    component: SidebarItem
}

export default meta
type Story = StoryObj<typeof SidebarItem>

const item: SidebarItemType = {
    path: '/',
    text: 'text',
    Icon: UserIcon
}

export const Normal: Story = {
    args: { item },
    decorators: [StoreDecorator({})]
}

export const NormalRedesigned: Story = {
    args: { item },
    decorators: [
        StoreDecorator({}),
        FeatureFlagsDecorator({ isAppRedesigned: true })
    ]
}
