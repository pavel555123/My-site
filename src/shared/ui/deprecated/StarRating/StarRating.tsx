import { memo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import StarIcon from '@/shared/assets/icons/star.svg'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { Icon as IconDeprecated } from '../Icon/Icon'
import { Icon } from '../../redesigned/Icon'
import cls from './StarRating.module.scss'

interface StarRatingProps {
    className?: string
    size?: number
    selectedStars?: number
    onSelect?: (starsCount: number) => void
}

const stars = [1, 2, 3, 4, 5]

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect
    } = props

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => () => {
        if (!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(
            toggleFeatures({
                name: 'isAppRedesigned',
                on: () => cls.StarRatingRedesigned,
                off: () => cls.StarRating
            }),
            {},
            [className])
        }>
            {stars.map(starNumber => {
                const commonProps = {
                    className: classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal]
                    ),
                    Svg: StarIcon,
                    width: size,
                    height: size,
                    onMouseEnter: onHover(starNumber),
                    onMouseLeave: onLeave,
                    onClick: onClick(starNumber),
                    key: starNumber,
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber
                }

                return (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={<Icon {...commonProps} clickable={!isSelected}/>}
                        off={<IconDeprecated {...commonProps}/>}
                        key={starNumber}
                    />
                )
            }
            )}
        </div>
    )
})
