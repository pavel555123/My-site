import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'
import { DefaultTFuncReturn } from 'i18next'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/deprecated/Text'
import { Input } from '@/shared/ui/deprecated/Input'
import { Card } from '@/shared/ui/deprecated/Card'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Drawer } from '@/shared/ui/redesigned/Drawer'

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
            <Input
                value={feedBack}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
                data-testid={'RatingCard.Input'}
            />
        </>
    )

    return (
        <Card
            className={classNames('', {}, [className])}
            max
            data-testid={'RatingCard'}
        >
            <VStack align='center' gap='8'>
                <Text title={starsCount ? t('Спасибо за оценку!') : title}/>
                <StarRating selectedStars={starsCount} onSelect={onSelectStars} size={40}/>
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap='32' max>
                        {modalContent}
                        <HStack justify='end' gap='16' max>
                            <Button
                                onClick={cancelHandler}
                                theme={ButtonTheme.OUTLINE_RED}
                                data-testid={'RatingCard.Close'}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                onClick={acceptHandler}
                                data-testid={'RatingCard.Send'}
                            >
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
