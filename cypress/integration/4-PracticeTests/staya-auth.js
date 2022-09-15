
describe('Тестирование авторизации в staya', function () {
    
    it('Открываю главную страницу сайта', function () {
        cy.visit('https://staya.dog/');
        cy.get('a.header-bottom__right--link').click();
        cy.get('form[method="post"] > input[name="email"]').type('nick95a@yandex.ru');
        cy.get('form[method="post"] > input[name="password"]').type('2627578aA');
        cy.get('form[method="post"] > button[type="submit"]').click();
        cy.contains('Мои заказы');
        cy.end();
         })

})
