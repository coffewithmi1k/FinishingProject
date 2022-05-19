export default class SearchResultPage {
    articleLinkLocator = '#article-link-248109';
    tagtitleLocator = '.crayons-title';

    clickArticleLink() {
        cy.get(this.articleLinkLocator, {timeout: 10000})
        .click();

        return this;
    }

    getTagTitle() {
        return cy.get(this.tagtitleLocator);
    }
}