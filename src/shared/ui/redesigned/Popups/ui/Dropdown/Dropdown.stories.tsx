import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../Button/Button'
import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
    title: 'shared/redesigned/Popups/Dropdown',
    component: Dropdown
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Normal: Story = {
    args: {
        trigger: <Button>123</Button>,
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]
    }
}
