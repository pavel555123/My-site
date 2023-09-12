import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleView } from '@/entities/Article'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import ListIconDeprecated from '@/shared/assets/icons/list.svg'
import TiledIconDeprecated from '@/shared/assets/icons/tiled.svg'
import ListIcon from '@/shared/assets/icons/burger.svg'
import TiledIcon from '@/shared/assets/icons/tile.svg'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated
        })
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated
        })
    }
]

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card className={classNames(cls.ArticleViewSelectorRedesigned, {}, [className])} border='round'>
                    <HStack gap='8'>
                        {viewTypes.map(viewType => (
                            <Icon
                                className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                                Svg={viewType.icon}
                                onClick={onClick(viewType.view)}
                                clickable
                                key={viewType.view}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                    {viewTypes.map(viewType => (
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                            key={viewType.view}>
                            <IconDeprecated
                                className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                                Svg={viewType.icon}
                                width={24}
                                height={24}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    )
})
