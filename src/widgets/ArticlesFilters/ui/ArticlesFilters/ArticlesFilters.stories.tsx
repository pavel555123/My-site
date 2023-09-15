import { Meta, StoryObj } from '@storybook/react'
import { ArticlesFilters } from './ArticlesFilters'

const meta: Meta<typeof ArticlesFilters> = {
    title: 'widgets/ArticlesFilters',
    component: ArticlesFilters
}

export default meta
type Story = StoryObj<typeof ArticlesFilters>

export const Normal: Story = {}
