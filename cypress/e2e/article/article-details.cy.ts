let currentArticleId = ''

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then(article => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    it.skip('Показывается содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })
    it.skip('Показывается содержимое рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
    })
    it.skip('Оставляется комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('text')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
    it('Оставляется оценка (пример на стабах)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })
})
