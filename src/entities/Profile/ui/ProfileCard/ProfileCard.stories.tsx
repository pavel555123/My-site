import { Meta, StoryObj } from '@storybook/react'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import Avatar from '@/shared/assets/tests/rabbit.jpeg'
import { Theme } from '@/shared/const/theme'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard
}

export default meta
type Story = StoryObj<typeof ProfileCard>

const primaryArgs = {
    data: {
        first: 'Pavel',
        lastname: 'Nikiforov',
        age: 20,
        city: 'Krasnoyarsk',
        username: 'admin',
        avatar: Avatar,
        currency: Currency.RUB,
        country: Country.Russia
    }
}

export const Primary: Story = {
    args: primaryArgs
}

export const PrimaryRedesigned: Story = {
    args: primaryArgs,
    decorators: [NewDesignDecorator]
}

export const WithError: Story = {
    args: { error: 'true' }
}

export const Loading: Story = {
    args: { isLoading: true },
    decorators: [ThemeDecorator(Theme.BLUE)]
}

export const LoadingDark: Story = {
    args: { isLoading: true },
    decorators: [ThemeDecorator(Theme.DARK)]
}
