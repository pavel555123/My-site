import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortField } from '@/entities/Article'
import { Select, SelectOption } from '@/shared/ui/deprecated/Select'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import cls from './ArticleSortSelector.module.scss'

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className])}>
                    <VStack gap='8'>
                        <Text text={t('Сортировать по:')}/>
                        <ListBox
                            value={sort}
                            items={sortFieldOptions}
                            onChange={onChangeSort}
                        />
                        <ListBox
                            value={order}
                            items={orderOptions}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            }
            off={
                <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
                    <Select<ArticleSortField>
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
            }
        />
    )
})
