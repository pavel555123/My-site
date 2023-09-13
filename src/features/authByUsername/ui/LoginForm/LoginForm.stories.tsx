import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import LoginForm from './LoginForm'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'aaa' }
})]

export const PrimaryRedesigned = Template.bind({})
PrimaryRedesigned.args = {}
PrimaryRedesigned.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'aaa' }
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true })
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true }
})]

export const withError = Template.bind({})
withError.args = {}
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'aaa', error: 'ERROR' }
})]
