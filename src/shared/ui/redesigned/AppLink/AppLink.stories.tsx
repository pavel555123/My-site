import { Meta, StoryObj } from '@storybook/react'
import { getRouteAbout } from '@/shared/const/router'
import { AppLink } from './AppLink'

const meta: Meta<typeof AppLink> = {
    title: 'shared/redesigned/AppLink',
    component: AppLink
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Normal: Story = {
    args: {
        to: getRouteAbout(),
        children: <div>123</div>
    }
}
