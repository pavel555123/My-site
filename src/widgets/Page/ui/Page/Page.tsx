import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { memo, type MutableRefObject, type ReactNode, useRef, type UIEvent } from 'react'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollSaveByPath, scrollSaveActions } from '@/features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'

export const PAGE_ID = 'PAGE_ID'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
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
