import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Icon } from './Icon'

export default {
    title: 'shared/redesigned/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Normal = Template.bind({})
Normal.args = {
    Svg: EyeIcon
}
