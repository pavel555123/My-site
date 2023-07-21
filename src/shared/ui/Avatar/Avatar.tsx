import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

export const Avatar = ({ className, src, alt, size }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        }
    }, [size])

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
        />
    )
}
