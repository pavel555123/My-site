import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { PageError } from './PageError'

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})
Light.args = {

}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({})
Dark.args = {

}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
