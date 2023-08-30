import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'
import { DefaultTFuncReturn } from 'i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input as InputDeprecated, Input } from '@/shared/ui/redesigned/Input'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card } from '@/shared/ui/redesigned/Card'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { ToggleFeatures } from '@/shared/lib/features'

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <>
                    <Text title={feedbackTitle}/>
                    <Input
                        value={feedBack}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid={'RatingCard.Input'}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated title={feedbackTitle}/>
                    <InputDeprecated
                        value={feedBack}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid={'RatingCard.Input'}
                    />
                </>
            }
        />
    )

    const content = (
        <>
            <VStack align='center' gap='8'>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text title={starsCount ? t('Спасибо за оценку!') : title}/>}
                    off={<TextDeprecated title={starsCount ? t('Спасибо за оценку!') : title}/>}
                />
                <StarRating selectedStars={starsCount} onSelect={onSelectStars} size={40}/>
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap='32' max>
                        {modalContent}
                        <ToggleFeatures
                            feature={'isAppRedesigned'}
                            on={
                                <HStack justify='end' gap='16' max>
                                    <Button
                                        onClick={cancelHandler}
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
                            }
                            off={
                                <HStack justify='end' gap='16' max>
                                    <ButtonDeprecated
                                        onClick={cancelHandler}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        data-testid={'RatingCard.Close'}
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        onClick={acceptHandler}
                                        data-testid={'RatingCard.Send'}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    <VStack gap='32'>
                        {modalContent}
                        <ToggleFeatures
                            feature={'isAppRedesigned'}
                            on={
                                <Button onClick={cancelHandler} size='l' fullWidth>
                                    {t('Отправить')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated onClick={cancelHandler} size={ButtonSize.L} fullWidth>
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    )

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    padding='24'
                    border='round'
                    max
                >
                    {content}
                </Card>
            }

            off={
                <CardDeprecated
                    className={classNames('', {}, [className])}
                    max
                    data-testid={'RatingCard'}
                >
                    {content}
                </CardDeprecated>
            }
        />
    )
})
