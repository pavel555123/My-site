import { type Meta, type StoryObj } from '@storybook/react'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
    title: 'shared/redesigned/Icon',
    component: Icon
}

export default meta
type Story = StoryObj<typeof Icon>

export const Normal: Story = {
    args: {
        Svg: EyeIcon
    }
}
