// eslint-disable-next-line test-imports-plugin/layer-imports
import '@/app/styles/index.scss'
import { type Story } from '@storybook/react'

export const StyleDecorator = (story: () => Story) => story()
