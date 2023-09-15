import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import Avatar from '@/shared/assets/tests/rabbit.jpeg'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { Theme } from '@/shared/const/theme'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage
}

export default meta
type Story = StoryObj<typeof ProfilePage>

const form = {
    first: 'Pavel',
    lastname: 'Nikiforov',
    age: 20,
    city: 'Krasnoyarsk',
    username: 'admin',
    avatar: Avatar,
    currency: Currency.RUB,
    country: Country.Russia
}

export const Normal: Story = {
    decorators: [StoreDecorator({
        profile: {
            form
        }
    })]
}

export const NormalRedesigned: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                form
            }
        }),
        FeatureFlagsDecorator({ isAppRedesigned: true })
    ]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form
        }
    })]
}
