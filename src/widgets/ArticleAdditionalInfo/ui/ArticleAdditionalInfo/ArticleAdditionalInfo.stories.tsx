import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { User } from '@/entities/User'
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo'

export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleAdditionalInfo>

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => <ArticleAdditionalInfo {...args} />

const author: User = {
    id: '1',
    username: 'user',
    avatar: 'https://w.forfun.com/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg'
}

export const Normal = Template.bind({})
Normal.args = { views: 100, author, createdAt: '10.10.2023' }
