import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import Avatar from '@/shared/assets/tests/rabbit.jpeg'
import { Theme } from '@/shared/const/theme'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ProfileCard } from './ProfileCard'

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

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

export const Primary = Template.bind({})
Primary.args = primaryArgs

export const PrimaryRedesigned = Template.bind({})
PrimaryRedesigned.args = primaryArgs
PrimaryRedesigned.decorators = [NewDesignDecorator]

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
