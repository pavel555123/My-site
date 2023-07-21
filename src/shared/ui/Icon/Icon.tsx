import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo, type SVGProps, type VFC } from 'react'

interface IconProps {
    className?: string
    Svg: VFC<SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted }: IconProps) => {
    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}/>
    )
})
