import { Article } from '../../../src/entities/Article'

const defaultArticle = {
    title: 'Testing Article',
    subtitle: 'БиологиЯ',
    img: 'https://www.kindpng.com/picc/m/735-7352020_thumb-image-biology-images-png-transparent-png.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'SCIENCE'
    ],
    blocks: []
}

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles/',
        headers: { Authorization: 'shdh' },
        body: article ?? defaultArticle
    }).then(resp => resp.body)
}

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'shdh' }
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
