import { useTranslation } from 'react-i18next'
import { memo, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text } from '@/shared/ui/deprecated/Text'

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const { isArticlesPageWasOpened } = useJsonSettings()

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true)
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }))
        }
    }, [dispatch, isArticlesPageWasOpened])

    const onClose = () => { setIsOpen(false) }

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t('Здесь вы можете искать и просматривать статьи на различные темы')}
        />
    )

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        )
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            {text}
        </Modal>
    )
})
