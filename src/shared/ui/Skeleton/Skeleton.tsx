import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'
import { type CSSProperties, memo } from 'react'

interface SkeletonProps {
    className?: string
    width?: string | number
    height?: string | number
    border?: string
}

export const Skeleton = memo(({ className, width, height, border }: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles}>

        </div>
    )
})
