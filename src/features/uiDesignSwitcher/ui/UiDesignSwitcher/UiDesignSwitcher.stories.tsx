import { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { UiDesignSwitcher } from './UiDesignSwitcher'

const meta: Meta<typeof UiDesignSwitcher> = {
    title: 'features/uiDesignSwitcher',
    component: UiDesignSwitcher
}

export default meta
type Story = StoryObj<typeof UiDesignSwitcher>

export const Normal: Story = {
    decorators: [StoreDecorator({})]
}
