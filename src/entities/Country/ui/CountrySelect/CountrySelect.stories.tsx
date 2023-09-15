import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { CountrySelect } from './CountrySelect'

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect
}

export default meta
type Story = StoryObj<typeof CountrySelect>

export const Primary: Story = {}

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryRedesigned: Story = {
    decorators: [FeatureFlagsDecorator({ isAppRedesigned: true })]
}
