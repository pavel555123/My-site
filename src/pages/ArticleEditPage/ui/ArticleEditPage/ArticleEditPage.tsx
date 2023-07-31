import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? `Редактирование с ID = ${id}` : 'Создание новой статьи'}
        </Page>
    )
})

export default ArticleEditPage
