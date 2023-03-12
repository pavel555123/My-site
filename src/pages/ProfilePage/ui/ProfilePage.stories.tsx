import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import Avatar from 'shared/assets/tests/rabbit.jpeg'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args as typeof ProfilePage} />

export const Normal = Template.bind({})
Normal.args = {

}
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
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
})]

export const Dark = Template.bind({})
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
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
})]
