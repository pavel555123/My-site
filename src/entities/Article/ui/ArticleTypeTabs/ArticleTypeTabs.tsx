import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'
import { ArticleType } from '../../model/consts/articleConsts'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo(({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation('article')

    const typeTabs = useMemo<Array<TabItem<ArticleType>>>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        }
    ], [t])

    const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
        onChangeType(tab.value)
    }, [onChangeType])

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    )
})
