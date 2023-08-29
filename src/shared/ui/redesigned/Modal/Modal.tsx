import React, { type ReactNode } from 'react'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { toggleFeatures } from '@/shared/lib/features'
import { Portal } from '../Portal'
import { Overlay } from '../Overlay'
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props
    const { theme } = useTheme()

    const {
        isClosing,
        isMounted,
        close
    } = useModal({ isOpen, onClose, animationDelay: ANIMATION_DELAY })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal', toggleFeatures({
                name: 'isAppRedesigned',
                on: () => cls.modalNew,
                off: () => cls.modalOld
            })])}>
                <Overlay onClick={close}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
