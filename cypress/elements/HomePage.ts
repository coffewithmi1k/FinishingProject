/* eslint-disable lines-between-class-members */
export default class HomePage {
    searchFieldLocator = '#header-search';
    searchButtonLocator = '#header-search button';
    firstArticleLinkLocator = '.crayons-story__title';
    javaScriptTagLinkLocator = '#default-sidebar-element-javascript';

    typeSearchValue(text : string) {
        cy.get(this.searchFieldLocator)
        .type(text);

        return this;
    }

    clickSearchButton() {
        cy.get(this.searchButtonLocator)
        .click();

        return this;
    }

    openFirstArticle() {
        cy.get(this.firstArticleLinkLocator)
        .first()
        .click();

        return this;
    }

    clickJavaScriptTag() {
        cy.get(this.javaScriptTagLinkLocator)
        .click();

        return this;
    }
}