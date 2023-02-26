import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Text',
    value: '123123'
}
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'aaa' }
})]

export const withError = Template.bind({})
withError.args = {
    placeholder: 'Text',
    value: '123123'
}
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'aaa', error: 'ERROR' }
})]

export const Loading = Template.bind({})
Loading.args = {
    placeholder: 'Text',
    value: '123123'
}
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true }
})]
