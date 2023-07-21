import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CountrySelect } from './CountrySelect'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {

}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {

}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
