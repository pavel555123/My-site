import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { Input } from '@/shared/ui/redesigned/Input'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleSortField, ArticleType } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sort'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'
import cls from './ArticlesFilters.module.scss'

interface ArticlesFiltersProps {
    className?: string
    search: string
    sort: ArticleSortField
    order: SortOrder
    type: ArticleType
    onChangeSearch: (search: string) => void
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newOrder: ArticleSortField) => void
    onChangeType: (type: ArticleType) => void
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        search,
        sort,
        order,
        type,
        onChangeSearch,
        onChangeOrder,
        onChangeSort,
        onChangeType
    } = props
    const { t } = useTranslation('article')

    return (
        <Card className={classNames(cls.ArticlesFilters, {}, [className])} padding='24'>
            <VStack gap='32'>
                <Input
                    value={search}
                    placeholder={t('Поиск') as string}
                    size='s'
                    onChange={onChangeSearch}
                    addonLeft={<Icon Svg={SearchIcon}/>}
                />
                <ArticleTypeTabs
                    className={cls.tabs}
                    value={type}
                    onChangeType={onChangeType}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    )
})
