import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Normal: Story = {
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: 'aaa' }
    })]
}
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: '123', password: 'aaa' }
    })]
}
export const AuthNavbar: Story = {
    decorators: [StoreDecorator({
        user: { authData: {} }
    })]
}
