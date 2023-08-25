import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { Input } from '@/shared/ui/deprecated/Input'
import { Card } from '@/shared/ui/deprecated/Card'
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
            <Card className={cls.search}>
                <Input
                    value={search}
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    )
})
