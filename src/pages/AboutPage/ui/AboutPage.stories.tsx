import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AboutPage from './AboutPage'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args as typeof AboutPage} />

export const Normal = Template.bind({})
Normal.args = {

}
Normal.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
