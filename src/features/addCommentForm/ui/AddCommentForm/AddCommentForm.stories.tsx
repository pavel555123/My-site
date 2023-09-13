import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import AddCommentForm from './AddCommentForm'

export default {
    title: 'features/addCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Normal = Template.bind({})
Normal.args = {
    onSendComment: action('onSendComment')
}
Normal.decorators = [StoreDecorator({})]

export const NormalRedesigned = Template.bind({})
NormalRedesigned.args = {
    onSendComment: action('onSendComment')
}
NormalRedesigned.decorators = [StoreDecorator({}), FeatureFlagsDecorator({ isAppRedesigned: true })]
