import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import Avatar from '@/shared/assets/tests/rabbit.jpeg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
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

export const withError = Template.bind({})
withError.args = {
    error: 'true'
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}

Loading.decorators = [ThemeDecorator(Theme.BLUE)]

export const LoadingDark = Template.bind({})
LoadingDark.args = {
    isLoading: true
}

LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]
