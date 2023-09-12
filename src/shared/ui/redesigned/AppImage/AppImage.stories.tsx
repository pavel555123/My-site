import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { AppImage } from './AppImage'

export default {
    title: 'shared/redesigned/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />

export const Normal = Template.bind({})
Normal.args = { src: 'https://www.sunhome.ru/i/wallpapers/57/raiskoe-ozero.orig.jpg', width: 600, height: 300 }
