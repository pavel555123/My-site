import { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
    title: 'shared/redesigned/Popups/Popover',
    component: Popover
}

export default meta
type Story = StoryObj<typeof Popover>

export const Normal: Story = {
    args: {
        trigger: <button>123</button>,
        children: <div>555</div>
    }
}
