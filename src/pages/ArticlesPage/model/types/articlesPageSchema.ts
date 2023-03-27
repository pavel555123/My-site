import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
    view: ArticleView
    page: number
    limit?: number
    hasMore: boolean
    isLoading?: boolean
    error?: string
    _inited: boolean
}
