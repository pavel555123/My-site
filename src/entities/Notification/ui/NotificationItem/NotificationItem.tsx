import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './NotificationItem.module.scss'
import { type Notification } from '../../model/types/notification'
import { Card, CardTheme } from '@/shared/ui/Card/Card'
import { Text } from '@/shared/ui/Text/Text'

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props

    const content = (
        <Card className={classNames(cls.NotificationItem, {}, [className])} theme={CardTheme.OUTLINED}>
            <Text title={item.title} text={item.description}/>
        </Card>
    )

    if (item.href) {
        return (
            <a className={cls.link} href={item.href} target='_blank' rel="noreferrer">
                {content}
            </a>
        )
    }

    return content
})
