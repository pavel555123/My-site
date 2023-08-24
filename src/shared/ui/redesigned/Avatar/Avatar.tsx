import { type CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '../Skeleton'
import { Icon } from '../Icon'
import { AppImage } from '../../redesigned/AppImage'
import UserIcon from '../../../assets/icons/user.svg'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        alt,
        size = 100
    } = props

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    const fallback = <Skeleton width={size} height={size} border='50%'/>
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size}/>

    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    )
}
