import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { getRouteAbout } from '@/shared/const/router'
import { AppLink } from './AppLink'

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Normal = Template.bind({})
Normal.args = { to: getRouteAbout(), children: <div>123</div> }
