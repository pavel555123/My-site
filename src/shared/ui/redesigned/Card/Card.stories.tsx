import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../Text/Text'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
    title: 'shared/redesigned/Card',
    component: Card
}

export default meta
type Story = StoryObj<typeof Card>

export const Normal: Story = {
    args: { children: <Text title='title' text='text'/> }
}
