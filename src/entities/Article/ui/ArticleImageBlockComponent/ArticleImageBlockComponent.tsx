import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign } from '@/shared/ui/Text/Text'
import { type ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img className={cls.img} src={block.src} alt={block.title}/>
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER}/>
            )}
        </div>
    )
})
