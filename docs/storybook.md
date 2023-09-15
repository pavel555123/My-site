## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    title: 'shared/redesigned/Button',
    component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: { children: 'Text' }
}

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: 'clear'
    }
}
```
