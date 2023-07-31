import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'
import AboutPage from './AboutPage'

export default {
    title: 'pages/ForbiddenPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage/>

export const Normal = Template.bind({})
Normal.args = {

}
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
