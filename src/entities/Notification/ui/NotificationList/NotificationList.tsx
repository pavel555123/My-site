import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './NotificationList.module.scss'
import { useNotifications } from '../../api/notificationApi'
import { VStack } from '@/shared/ui/Stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000
    })

    if (isLoading) {
        return (
            <VStack className={classNames(cls.NotificationList, {}, [className])} gap='16' max>
                <Skeleton width='100%' border='8px' height='80px'/>
                <Skeleton width='100%' border='8px' height='80px'/>
                <Skeleton width='100%' border='8px' height='80px'/>
            </VStack>
        )
    }

    return (
        <VStack className={classNames(cls.NotificationList, {}, [className])} gap='16' max>
            {data?.map(item => (
                <NotificationItem item={item} key={item.id}/>
            ))}
        </VStack>
    )
})
