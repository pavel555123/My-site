import { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta: Meta<typeof ListBox> = {
    title: 'shared/deprecated/Popups/ListBox',
    component: ListBox,
    decorators: [
        Story => <div style={{ padding: 200 }}><Story/></div>
    ]
}

export default meta
type Story = StoryObj<typeof ListBox>

export const Normal: Story = {
    args: {
        items: [
            { content: '121312312', value: '123' },
            { content: '12131221312312', value: '123123' }
        ]
    }
}

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            { content: '121312312', value: '123' },
            { content: '12131221312312', value: '123123' }
        ]
    }
}

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            { content: '121312312', value: '123' },
            { content: '12131221312312', value: '123123' }
        ]
    }
}

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            { content: '121312312', value: '123' },
            { content: '12131221312312', value: '123123' }
        ]
    }
}

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            { content: '121312312', value: '123' },
            { content: '12131221312312', value: '123123' }
        ]
    }
}
