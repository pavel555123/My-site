import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
    title: 'widgets/Page',
    component: Page
}

export default meta
type Story = StoryObj<typeof Page>

export const Normal: Story = {
    args: { children: <div>123</div> },
    decorators: [StoreDecorator({})]
}
