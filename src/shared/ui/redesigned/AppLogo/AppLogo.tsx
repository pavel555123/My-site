import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import AppSvg from '@/shared/assets/icons/app-image.svg'
import { HStack } from '../Stack'
import cls from './AppLogo.module.scss'

interface AppLogoProps {
    className?: string
    size?: number
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
    return (
        <HStack
            className={classNames(cls.appLogoWrapper, {}, [className])}
            justify='center'
            max
        >
            <div className={cls.gradientBig}/>
            <div className={cls.gradientSmall}/>
            <AppSvg
                className={cls.appLogo}
                width={size}
                height={size}
                color='black'
            />
        </HStack>
    )
})
