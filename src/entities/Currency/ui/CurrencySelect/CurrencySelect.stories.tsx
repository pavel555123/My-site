import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { CurrencySelect } from './CurrencySelect'

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect
}

export default meta
type Story = StoryObj<typeof CurrencySelect>

export const Primary: Story = {}

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryRedesigned: Story = {
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
