import { ArticleBlock } from '../../model/types/article'
import { ArticleBlockType } from '../../model/consts/articleConsts'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import cls from './ArticleDetails.module.scss'

export const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent
                className={cls.block}
                block={block}
                key={block.id}
            />
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent
                className={cls.block}
                block={block}
                key={block.id}
            />
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent
                className={cls.block}
                block={block}
                key={block.id}
            />
        default:
            return null
    }
}
