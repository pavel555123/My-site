import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
    title: 'shared/redesigned/Tabs',
    component: Tabs
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Normal: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab info 1'
            },
            {
                value: 'tab 2',
                content: 'tab info 2'
            },
            {
                value: 'tab 3',
                content: 'tab info 3'
            }
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick')
    }
}
