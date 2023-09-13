import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
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
Light.args = {}

export const LightRedesigned = Template.bind({})
LightRedesigned.args = {}
LightRedesigned.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })]
