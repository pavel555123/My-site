import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
    view: ArticleView
    isLoading?: boolean
    error?: string
}
