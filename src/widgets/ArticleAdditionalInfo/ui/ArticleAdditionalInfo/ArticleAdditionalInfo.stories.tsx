import { Meta, StoryObj } from '@storybook/react'
import { User } from '@/entities/User'
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo'

const meta: Meta<typeof ArticleAdditionalInfo> = {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo
}

export default meta
type Story = StoryObj<typeof ArticleAdditionalInfo>

const author: User = {
    id: '1',
    username: 'user',
    avatar: 'https://w.forfun.com/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg'
}

export const Normal: Story = {
    args: {
        views: 100,
        author,
        createdAt: '10.10.2023'
    }
}
