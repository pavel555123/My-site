import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleSortSelector } from '@/features/articleSortSelector'
import { ArticleTypeTabs } from '@/features/articleTypeTabs'
import { ArticleViewSelector } from '@/features/articleViewSelector'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Input } from '@/shared/ui/redesigned/Input'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card } from '@/shared/ui/redesigned/Card'
import { ToggleFeatures } from '@/shared/lib/features'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
    className?: string
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation('article')

    const {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType
    } = useArticleFilters()

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            </div>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card className={cls.search}>
                        <Input
                            value={search}
                            placeholder={t('Поиск')}
                            onChange={onChangeSearch}
                        />
                    </Card>
                }
                off={
                    <CardDeprecated className={cls.search}>
                        <InputDeprecated
                            value={search}
                            placeholder={t('Поиск')}
                            onChange={onChangeSearch}
                        />
                    </CardDeprecated>
                }
            />
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    )
})
