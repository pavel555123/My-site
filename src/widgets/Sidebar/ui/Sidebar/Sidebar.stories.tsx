import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { Sidebar } from './Sidebar'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({
    user: { authData: {} }
})]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [StoreDecorator({
    user: {}
})]

export const LightRedesigned = Template.bind({})
LightRedesigned.args = {}
LightRedesigned.decorators = [
    StoreDecorator({
        user: { authData: {} }
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true })
]

export const NoAuthRedesigned = Template.bind({})
NoAuthRedesigned.args = {}
NoAuthRedesigned.decorators = [
    StoreDecorator({
        user: {}
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true })
]
