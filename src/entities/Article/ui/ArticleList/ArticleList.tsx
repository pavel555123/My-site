import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from '@/shared/ui/Text/Text'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} view={view} key={index}/>
        ))
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target
    } = props
    const { t } = useTranslation('article')

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                className={cls.card}
                article={article}
                view={view}
                target={target}
                key={article.id}
            />
        )
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} size={TextSize.L}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view) }
        </div>
    )
})
// import { classNames } from 'shared/lib/classNames/classNames'
// import { useTranslation } from 'react-i18next'
// import { type HTMLAttributeAnchorTarget, type LegacyRef, memo } from 'react'
// import { Text, TextSize } from 'shared/ui/Text/Text'
// import { List, type ListRowProps, WindowScroller } from 'react-virtualized'
// import { PAGE_ID } from 'widgets/Page/Page'
// import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
// import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
// import cls from './ArticleList.module.scss'
// import { type Article, ArticleView } from '../../model/types/article'
//
// interface ArticleListProps {
//     className?: string
//     articles: Article[]
//     isLoading?: boolean
//     target?: HTMLAttributeAnchorTarget
//     view?: ArticleView
//     virtualized?: boolean
// }
//
// const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
//     .fill(0)
//     .map((item, index) => (
//         <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
//     ))
//
// export const ArticleList = memo((props: ArticleListProps) => {
//     const {
//         className,
//         articles,
//         view = ArticleView.SMALL,
//         isLoading,
//         target,
//         virtualized = true
//     } = props
//     const { t } = useTranslation()
//
//     const isBig = view === ArticleView.BIG
//
//     const itemsPerRow = isBig ? 1 : 3
//     const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)
//
//     const rowRender = ({
//         index, isScrolling, key, style
//     }: ListRowProps) => {
//         const items = []
//         const fromIndex = index * itemsPerRow
//         const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)
//
//         for (let i = fromIndex; i < toIndex; i += 1) {
//             items.push(
//                 <ArticleListItem
//                     article={articles[i]}
//                     view={view}
//                     target={target}
//                     key={`str${i}`}
//                     className={cls.card}
//                 />
//             )
//         }
//
//         return (
//             <div
//                 key={key}
//                 style={style}
//                 className={cls.row}
//             >
//                 {items}
//             </div>
//         )
//     }
//
//     if (!isLoading && !articles.length) {
//         return (
//             <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
//                 <Text size={TextSize.L} title={t('Статьи не найдены')} />
//             </div>
//         )
//     }
//
//     return (
//         <WindowScroller
//             scrollElement={document.getElementById(PAGE_ID) as Element}
//         >
//             {({
//                 height,
//                 width,
//                 registerChild,
//                 onChildScroll,
//                 isScrolling,
//                 scrollTop
//             }) => (
//                 <div
//                     ref={registerChild as LegacyRef<HTMLDivElement>}
//                     className={classNames(cls.ArticleList, {}, [className, cls[view]])}
//                 >
//                     {virtualized
//                         ? (
//                             <List
//                                 height={height ?? 700}
//                                 rowCount={rowCount}
//                                 rowHeight={isBig ? 700 : 330}
//                                 rowRenderer={rowRender}
//                                 width={width ? width - 80 : 700}
//                                 autoHeight
//                                 onScroll={onChildScroll}
//                                 isScrolling={isScrolling}
//                                 scrollTop={scrollTop}
//                             />
//                         )
//                         : (
//                             articles.map((item) => (
//                                 <ArticleListItem
//                                     article={item}
//                                     view={view}
//                                     target={target}
//                                     key={item.id}
//                                     className={cls.card}
//                                 />
//                             ))
//                         )}
//                     {isLoading && getSkeletons(view)}
//                 </div>
//             )}
//         </WindowScroller>
//     )
// })
