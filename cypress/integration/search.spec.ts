import ArticlePage from '../elements/ArticlePage';
import SearchResultPage from '../elements/SearchResultPage';
import HomePage from './../elements/HomePage'

describe('Search: ', () => {
    const homePage = new HomePage();
    const articlePage = new ArticlePage();
    const searchResultPage = new SearchResultPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it('verifies article can be found by means of Search', () => {
        homePage
        .typeSearchValue('test')
        .clickSearchButton();

        searchResultPage
        .clickArticleLink();

        articlePage
        .getTitle()
        .should('contain', `JavaScript Test Framework`);
    })

    it('verifies first article can be opened from Home Page directly', () => {
        homePage
        .openFirstArticle();

        articlePage
        .getTitle()
         .should('be.visible');
    })

    it('verifies tags links work', () => {
        homePage
        .clickJavaScriptTag();

        searchResultPage
        .getTagTitle()
        .should('contain', 'JavaScript');
    })

    it('verifies search result by tag can be opened', () => {
        cy.searchBySpecifiedTag('javascript');

        searchResultPage
        .getTagTitle()
        .should('contain', 'JavaScript');
    })
})