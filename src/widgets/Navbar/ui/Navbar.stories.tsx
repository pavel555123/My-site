import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Navbar } from './Navbar'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {

}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
Light.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'aaa' }
})]

export const Dark = Template.bind({})
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '123', password: 'aaa' }
})]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {

}
AuthNavbar.decorators = [StoreDecorator({
    user: { authData: {} }
})]
