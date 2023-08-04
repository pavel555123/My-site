import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import ListIcon from '@/shared/assets/icons/list.svg'
import TiledIcon from '@/shared/assets/icons/tiled.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { ArticleView } from '@/entities/Article'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
]

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}>
                    <Icon
                        className={classNames('', { [cls.selected]: viewType.view === view })}
                        Svg={viewType.icon}/>
                </Button>
            ))}
        </div>
    )
})