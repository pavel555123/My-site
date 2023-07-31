import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { type ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text className={cls.title} title={block.title} />
            )}
            {block.paragraphs.map(paragraph => (
                <Text className={cls.paragraph} text={paragraph} key={paragraph}/>
            ))}
        </div>
    )
})
