import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Page } from './Page'

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Normal = Template.bind({})
Normal.args = { children: <div>123</div> }
Normal.decorators = [StoreDecorator({})]
