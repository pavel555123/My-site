import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { CurrencySelect } from './CurrencySelect'

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {

}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {

}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
