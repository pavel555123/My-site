import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleType } from '@/entities/Article'
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs'
import { Tabs } from '@/shared/ui/redesigned/Tabs'
import { ToggleFeatures } from '@/shared/lib/features'

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Tabs
                    className={classNames('', {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    direction='column'
                />
            }
            off={
                <TabsDeprecated
                    className={classNames('', {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                />
            }
        />
    )
})
