import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { DefaultTFuncReturn } from 'i18next'

interface RatingCardProps {
    className?: string
    title?: DefaultTFuncReturn | string
    feedbackTitle?: DefaultTFuncReturn | string
    hasFeedback?: boolean
    onAccept?: (starsCount: number, feedback?: string) => void
    onCancel?: (starsCount: number) => void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        rate = 0
    } = props
    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedBack, setFeedback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedBack)
    }, [feedBack, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
        <>
            <Text title={feedbackTitle}/>
            <Input value={feedBack} onChange={setFeedback} placeholder={t('Ваш отзыв')}/>
        </>
    )

    return (
        <Card className={classNames('', {}, [className])} max>
            <VStack align='center' gap='8'>
                <Text title={starsCount ? t('Спасибо за оценку!') : title}/>
                <StarRating selectedStars={starsCount} onSelect={onSelectStars} size={40}/>
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap='32' max>
                        {modalContent}
                        <HStack justify='end' gap='16' max>
                            <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                                {t('Закрыть')}
                            </Button>
                            <Button onClick={acceptHandler}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    <VStack gap='32'>
                        {modalContent}
                        <Button onClick={cancelHandler} size={ButtonSize.L} fullWidth>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    )
})