import { Meta, StoryObj } from '@storybook/react'
import { AppLogo } from './AppLogo'

const meta: Meta<typeof AppLogo> = {
    title: 'shared/redesigned/AppLogo',
    component: AppLogo
}

export default meta
type Story = StoryObj<typeof AppLogo>

export const Normal: Story = {
    args: { size: 300 }
}
