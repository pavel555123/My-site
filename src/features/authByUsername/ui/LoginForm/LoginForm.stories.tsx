import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import LoginForm from './LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'aaa' }
    })]
}

export const PrimaryRedesigned: Story = {
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: 'aaa' }
        }),
        FeatureFlagsDecorator({ isAppRedesigned: true })
    ]
}

export const Loading: Story = {
    decorators: [StoreDecorator({
        loginForm: { isLoading: true }
    })]
}

export const WithError: Story = {
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'aaa', error: 'ERROR' }
    })]
}
