import { Meta, StoryObj } from '@storybook/react'
import { ScrollToTopButton } from './ScrollToTopButton'

const meta: Meta<typeof ScrollToTopButton> = {
    title: 'features/scrollToTopButton',
    component: ScrollToTopButton
}

export default meta
type Story = StoryObj<typeof ScrollToTopButton>

export const Normal: Story = {}
