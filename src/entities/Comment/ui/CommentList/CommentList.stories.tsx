import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentList } from './CommentList'

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comments: [
        {
            id: '1',
            text: '123',
            user: { id: '1', username: 'Pavel' }
        },
        {
            id: '2',
            text: '12345',
            user: { id: '2', username: 'Pavel123' }
        }
    ]
}

export const Loading = Template.bind({})
Loading.args = {
    comments: [],
    isLoading: true
}
