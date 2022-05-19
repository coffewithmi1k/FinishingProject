export default class ArticlePage {
    titleLocator = '.crayons-article__header__meta h1';

    getTitle() {
        return cy.get(this.titleLocator);
    }
}