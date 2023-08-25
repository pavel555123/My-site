import { type ReactNode, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Flex, FlexDirection } from '../Stack/Flex/Flex'
import { Card } from '../Card/Card'
import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string> {
    className?: string
    tabs: Array<TabItem<T>>
    value: T
    onTabClick: (tab: TabItem<T>) => void
    direction?: FlexDirection
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
        direction = 'row'
    } = props

    const clickHandler = useCallback((tab: TabItem<T>) => {
        return () => {
            onTabClick(tab)
        }
    }, [onTabClick])

    return (
        <Flex
            className={classNames(cls.Tabs, {}, [className])}
            direction={direction}
            align='start'
            gap='8'
        >
            {tabs.map(tab => {
                const isSelected = tab.value === value

                return (
                    <Card
                        className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
                        variant={isSelected ? 'light' : 'normal'}
                        onClick={clickHandler(tab)}
                        border='round'
                        key={tab.value}
                    >
                        {tab.content}
                    </Card>
                )
            })}
        </Flex>
    )
}
