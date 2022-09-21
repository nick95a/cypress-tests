// Зарегистрируйтесь на сайте staya.com и введите свой имейл и пароль в переменные ниже.
let email = "";
let password = "";


describe('Тестирование авторизации в staya', function () {
    
    it('Открываю главную страницу сайта', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('form[method="post"] > input[name="email"]').type(email);
        cy.get('form[method="post"] > input[name="password"]').type(password);
        cy.get('form[method="post"] > button[type="submit"]').click();
        cy.contains('Мои заказы');
        cy.end();
         })
})

 