import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
    title: 'shared/redesigned/Modal',
    component: Modal
}

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nulla porro sit. Accusantium aut exercitationem fuga ipsa iusto minima, provident quam quo, ratione repellendus rerum sed similique sit tenetur voluptas!'
    }
}

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nulla porro sit. Accusantium aut exercitationem fuga ipsa iusto minima, provident quam quo, ratione repellendus rerum sed similique sit tenetur voluptas!'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
