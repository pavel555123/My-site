import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Select, type SelectOption } from '@/shared/ui/Select/Select'
import { ArticleSortField } from '../../model/types/article'
import { type SortOrder } from '@/shared/types'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newOrder: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort
    } = props
    const { t } = useTranslation('article')

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        }
    ], [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                options={sortFieldOptions}
                label={t('Сортировать ПО')}
                onChange={onChangeSort}
            />
            <Select
                className={cls.order}
                value={order}
                options={orderOptions}
                label={t('по')}
                onChange={onChangeOrder}
            />
        </div>
    )
})
