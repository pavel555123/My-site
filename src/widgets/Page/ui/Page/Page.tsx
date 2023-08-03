import { type MutableRefObject, type ReactNode, type UIEvent, memo, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollSaveByPath, scrollSaveActions } from '@/features/ScrollSave'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { TestsProps } from '@/shared/types/tests'
import cls from './Page.module.scss'

export const PAGE_ID = 'PAGE_ID'

interface PageProps extends TestsProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd
    } = props

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollSaveByPath(state, pathname)
    )

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }))
    }, 2000)

    return (
        <main
            data-testid={props['data-testid'] ?? 'Page'}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </main>
    )
})
