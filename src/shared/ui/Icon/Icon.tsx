import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo, type SVGProps, type VFC } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string
    Svg: VFC<SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted,
        ...otherProps
    } = props
    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />
    )
})
