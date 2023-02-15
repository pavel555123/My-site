import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/Applink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
}
Secondary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
